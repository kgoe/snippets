### git

### git commands

### git --help
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

#### start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

#### work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

#### examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

#### grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

##### collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.

### git help -a
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

#### available git commands in 'C:/Program Files/Git/mingw64/libexec/git-core'

  add                     get-tar-commit-id       rebase--interactive
  add--interactive        grep                    receive-pack
  am                      gui                     reflog
  annotate                gui--askpass            remote
  apply                   gui--askyesno           remote-ext
  archive                 gui.tcl                 remote-fd
  askpass                 hash-object             remote-ftp
  bisect                  help                    remote-ftps
  bisect--helper          http-backend            remote-http
  blame                   http-fetch              remote-https
  branch                  http-push               repack
  bundle                  imap-send               replace
  cat-file                index-pack              request-pull
  check-attr              init                    rerere
  check-ignore            init-db                 reset
  check-mailmap           instaweb                rev-list
  check-ref-format        interpret-trailers      rev-parse
  checkout                legacy-rebase           revert
  checkout-index          legacy-stash            rm
  cherry                  log                     send-email
  cherry-pick             ls-files                send-pack
  citool                  ls-remote               serve
  clean                   ls-tree                 sh-i18n--envsubst
  clone                   mailinfo                shortlog
  column                  mailsplit               show
  commit                  merge                   show-branch
  commit-graph            merge-base              show-index
  commit-tree             merge-file              show-ref
  config                  merge-index             stage
  count-objects           merge-octopus           stash
  credential              merge-one-file          status
  credential-manager      merge-ours              stripspace
  credential-store        merge-recursive         submodule
  credential-wincred      merge-resolve           submodule--helper
  cvsexportcommit         merge-subtree           subtree
  cvsimport               merge-tree              svn
  daemon                  mergetool               symbolic-ref
  describe                mktag                   tag
  diff                    mktree                  unpack-file
  diff-files              mv                      unpack-objects
  diff-index              name-rev                update
  diff-tree               notes                   update-git-for-windows
  difftool                p4                      update-index
  difftool--helper        pack-objects            update-ref
  fast-export             pack-redundant          update-server-info
  fast-import             pack-refs               upload-archive
  fetch                   patch-id                upload-pack
  fetch-pack              prune                   var
  filter-branch           prune-packed            verify-commit
  fmt-merge-msg           pull                    verify-pack
  for-each-ref            push                    verify-tag
  format-patch            quiltimport             web--browse
  fsck                    range-diff              whatchanged
  fsck-objects            read-tree               worktree
  gc                      rebase                  write-tree

git commands available from elsewhere on your $PATH

  bash  cmd   flow  lfs

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.

### git help credential
git credential <fill|approve|reject>

### git help remote
git remote [-v | --verbose]
git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=<fetch|push>] <name> <url>
git remote rename <old> <new>
git remote remove <name>
git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
git remote set-branches [--add] <name> <branch>…​
git remote get-url [--push] [--all] <name>
git remote set-url [--push] <name> <newurl> [<oldurl>]
git remote set-url --add [--push] <name> <newurl>
git remote set-url --delete [--push] <name> <url>
git remote [-v | --verbose] show [-n] <name>…​
git remote prune [-n | --dry-run] <name>…​
git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)…​]

### git tools
https://git-scm.com/
https://github.com/Microsoft/Git-Credential-Manager-for-Windows
https://bitbucket.org/product