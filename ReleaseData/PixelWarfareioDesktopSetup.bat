@echo off
:: Set the URL and the destination temp folder
set ZIP_URL=https://2hac.github.io/ReleaseData/PWIOSetup.zip
set TEMP_DIR=%TEMP%\PWIOSetup

:: Create the destination folder if it doesn't exist
if not exist "%TEMP_DIR%" mkdir "%TEMP_DIR%"

:: Download the ZIP file using PowerShell
echo Downloading PWIOSetup.zip...
powershell -Command "Invoke-WebRequest -Uri %ZIP_URL% -OutFile %TEMP_DIR%\PWIOSetup.zip"

:: Check if download was successful
if exist "%TEMP_DIR%\PWIOSetup.zip" (
    echo Download complete.
) else (
    echo Download failed.
    exit /b 1
)

:: Extract the ZIP file
echo Extracting the ZIP file...
powershell -Command "Expand-Archive -Path %TEMP_DIR%\PWIOSetup.zip -DestinationPath %TEMP_DIR%"

:: Check if the extraction was successful
if exist "%TEMP_DIR%\PWIODesktopSetup.exe" (
    echo Extraction complete.
) else (
    echo Extraction failed.
    exit /b 1
)

:: Run the EXE inside the folder
echo Running the setup...
start "" "%TEMP_DIR%\PWIODesktopSetup.exe"

:: Done
echo Process complete.
exit /b 0
