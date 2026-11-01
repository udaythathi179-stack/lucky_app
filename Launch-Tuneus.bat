@echo off
title Tuneus Music App
cd /d "%~dp0"

echo Starting Tuneus Music Server...

:: Start background node server if not already running
netstat -ano | findstr :3000 | findstr LISTENING >nul
if %errorlevel% neq 0 (
    start /b node --openssl-legacy-provider server.js
    timeout /t 2 /nobreak >nul
)

:: Try opening with Edge App Mode, or Chrome App Mode, or Default Browser
where msedge >nul 2>nul
if %errorlevel% equ 0 (
    start "" msedge --app=http://localhost:3000
    exit
)

where chrome >nul 2>nul
if %errorlevel% equ 0 (
    start "" chrome --app=http://localhost:3000
    exit
)

:: Fallback to default browser
start http://localhost:3000
exit

