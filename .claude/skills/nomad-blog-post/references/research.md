# Research commands

All proven while writing the v3.8.0 post. Run from the repo root. `gh` is authenticated;
the GitHub MCP server may not be — prefer `gh`.

## nomad-server releases

```bash
# every release, newest first
gh release list --repo nomad-nmr/nomad-server --limit 40

# notes for each tag since the last post's version (loop over the tags you need)
for t in v3.7.0 v3.7.1; do
  echo "########## $t ##########"
  gh release view $t --repo nomad-nmr/nomad-server --json body -q .body
done
```

## Commits in the release range

Use `<latest-tag>...main` for an upcoming release, or `<previous-tag>...<target-tag>` for
one already published. The examples below show the upcoming form.

```bash
# subjects only — for an overview
gh api repos/nomad-nmr/nomad-server/compare/<latest-tag>...main \
  --jq '.commits[] | "\(.commit.author.date[0:10]) | \(.commit.message | split("\n")[0])"'

# full messages — squash-merge bodies carry the detail
gh api repos/nomad-nmr/nomad-server/compare/<latest-tag>...main \
  --jq '.commits[] | "=== \(.commit.author.date[0:10]) | \(.commit.author.name)\n\(.commit.message)\n"'
```

Output can be long; page it with `head`/`tail` rather than truncating the research.

## Who did the work

```bash
# authors and co-authors (including Co-authored-by trailers) for recent main commits
gh api graphql -f query='{ repository(owner:"nomad-nmr", name:"nomad-server") {
  object(expression:"main") { ... on Commit { history(first:50) { nodes {
    messageHeadline authors(first:5) { nodes { name email user { login } } } } } } } } }' \
  --jq '.data.repository.object.history.nodes[] | .messageHeadline as $h
        | .authors.nodes[] | "\(.name) (\(.user.login // "no account")) — \($h)"' | sort -u
```

Squash merges fold sub-commit authors into the message body, so also grep the bodies:

```bash
gh api repos/nomad-nmr/nomad-server/compare/<latest-tag>...main \
  --jq '.commits[].commit.message' | grep -i 'co-authored-by' | sort | uniq -c
```

Also scan release notes for "New Contributors" and "by @user in #PR". Collaborating
labs, students and beta testers may not be visible at all — ask.

## This repo (nomad-docs), all branches

```bash
# the origin URL may embed a token — always redact
git fetch origin --quiet 2>&1 | sed 's/gh[pousr]_[A-Za-z0-9]*/***/g'

# every commit on every branch since the last post's date, stash excluded.
# --exclude must come BEFORE --all. Add --until=<release date> for a published release.
git log --exclude=refs/stash --all --since=<YYYY-MM-DD> --date=short \
  --format='%ad %h [%D] %an: %s' | sed 's/gh[pousr]_[A-Za-z0-9]*/***/g'

# what changed in content since the last post: diff from the commit that added it...
git log --diff-filter=A --format=%h -- blog/<last-post-path>
git diff --stat <that-commit> HEAD -- docs src blog static/img
# ...or, if that post is not in git, from the last commit before its date
git rev-list -1 --before=<YYYY-MM-DD> HEAD
```

Read the changed docs themselves (headings are
enough) before describing them — e.g. `grep -n '^#' docs/getting-started/<file>.md`.
