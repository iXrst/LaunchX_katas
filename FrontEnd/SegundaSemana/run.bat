@echo off
 
set CurrentDrive=%~d0
 
set XamppPath="C:\Program Files\Xampp"
set ChromePath="C:\Program Files\Google\Chrome\Application\"
set ProjectBrowse="http:\\localhost:80\Pasteleria"
@REM set VsCode="C:\VSCode\"
set VsCodeProject="C:\xampp\htdocs\Pasteleria"
 
@REM start /b "XAMPP" %XamppPath%
start /d %XamppPath% xampp-control.exe
TIMEOUT 5
@REM start /b %ChromePath% -incognito %ProjectBrowse%
start /d %ChromePath% chrome.exe -incognito %ProjectBrowse%
@REM start /d %VsCode% code.exe %VsCodeProject%
 
exit