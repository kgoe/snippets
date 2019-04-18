;doc={};

/**
 * template
 */
((doc)=>{
})(doc);

/**
 * windows
 */
((doc)=>{
doc.windows_cmd_list=
`
dos
cmd
dir
cd
call
cls
color
date
echo
exit
find
hostname
pause
runas
shutdown
sort
start
taskkill
tasklist
time
timeout
title
ver
w32tm

ftp
ftype
getmac
ipconfig
netsh
netstat
nslookup
pathping
ping
route
systeminfo
telnet
tftp
tracert

attrib
comp
compact
copy / xcopy
diskcomp
diskcopy
erase / del
expand
fc
mkdir
move
rename
replace
rmdir / rd
tree
type

chkdsk
chkntfs
defrag
diskpart
driverquery
format
label
made
mountvol
verify
vol

for
gpresult
gpupdate
perfmon
prompt
reg
`;
})(doc);

/**
 * unix
 */
((doc)=>{
doc.unix_cmd_list=
`
sh
bash
ls
cd
pwd
echo
echo "str" > file.txt
mv
tar
gzip
ftp
lpr
mkdir
rm
rmdir
mount
umount

cd
pwd
ls

du
df

cat
more
less

touch
vi
vim
nano

find
grep

top
chmod
ps
kill

date
cal
diff

ssh
curl
wget

man
help

echo "text" > filename
echo "text" >> /user/ubuntu/filename
`;
})(doc);
