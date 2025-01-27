@echo off
set "folderPath=%localAppData%\PixelWarfareDesktop\WebView2Data\"

echo.
echo Game save data location: %folderPath%
echo.
echo Are you sure you want to delete this folder? (Y/N)
set /p "choice=Enter your choice: "

if /i "%choice%"=="Y" (
    if exist "%folderPath%" (
        rmdir /s /q "%folderPath%"
        echo.
        echo Game save data cleared: %folderPath%
    ) else (
        echo.
        echo Game save data not found: %folderPath%
    )
) else (
    echo.
    echo Operation canceled. Game save data not deleted.
)
pause
exit
