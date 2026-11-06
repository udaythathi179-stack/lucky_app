@echo off
title Tuneus Web Music Player
cd /d "%~dp0"

echo Starting Tuneus Music Server...

:: Start background node server if not already running
netstat -ano | findstr :3000 | findstr LISTENING >nul
if %errorlevel% neq 0 (
    start /b node backend/server.js
    timeout /t 2 /nobreak >nul
)

:: Open in default web browser
start http://localhost:3000
exit
