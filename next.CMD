@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\Carol\ABNMO\front-abmno\node_modules\.pnpm\next@15.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1\node_modules\next\dist\bin\node_modules;C:\Users\Carol\ABNMO\front-abmno\node_modules\.pnpm\next@15.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1\node_modules\next\dist\node_modules;C:\Users\Carol\ABNMO\front-abmno\node_modules\.pnpm\next@15.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1\node_modules\next\node_modules;C:\Users\Carol\ABNMO\front-abmno\node_modules\.pnpm\next@15.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1\node_modules;C:\Users\Carol\ABNMO\front-abmno\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\Carol\ABNMO\front-abmno\node_modules\.pnpm\next@15.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1\node_modules\next\dist\bin\node_modules;C:\Users\Carol\ABNMO\front-abmno\node_modules\.pnpm\next@15.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1\node_modules\next\dist\node_modules;C:\Users\Carol\ABNMO\front-abmno\node_modules\.pnpm\next@15.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1\node_modules\next\node_modules;C:\Users\Carol\ABNMO\front-abmno\node_modules\.pnpm\next@15.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1\node_modules;C:\Users\Carol\ABNMO\front-abmno\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\next\dist\bin\next" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\next\dist\bin\next" %*
)
