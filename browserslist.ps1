#!/usr/bin/env pwsh
$basedir=Split-Path $MyInvocation.MyCommand.Definition -Parent

$exe=""
$pathsep=":"
$env_node_path=$env:NODE_PATH
$new_node_path="C:\Users\Carol\ABNMO\front-abmno\node_modules\browserslist\node_modules;C:\Users\Carol\ABNMO\front-abmno\node_modules;C:\Users\Carol\ABNMO\node_modules;C:\Users\Carol\node_modules;C:\Users\node_modules;C:\node_modules;C:\Users\Carol\ABNMO\front-abmno\node_modules\.pnpm\node_modules"
if ($PSVersionTable.PSVersion -lt "6.0" -or $IsWindows) {
  # Fix case when both the Windows and Linux builds of Node
  # are installed in the same directory
  $exe=".exe"
  $pathsep=";"
} else {
  $new_node_path="/mnt/c/Users/Carol/ABNMO/front-abmno/node_modules/browserslist/node_modules:/mnt/c/Users/Carol/ABNMO/front-abmno/node_modules:/mnt/c/Users/Carol/ABNMO/node_modules:/mnt/c/Users/Carol/node_modules:/mnt/c/Users/node_modules:/mnt/c/node_modules:/mnt/c/Users/Carol/ABNMO/front-abmno/node_modules/.pnpm/node_modules"
}
if ([string]::IsNullOrEmpty($env_node_path)) {
  $env:NODE_PATH=$new_node_path
} else {
  $env:NODE_PATH="$new_node_path$pathsep$env_node_path"
}

$ret=0
if (Test-Path "$basedir/node$exe") {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "$basedir/node$exe"  "$basedir/../browserslist/cli.js" $args
  } else {
    & "$basedir/node$exe"  "$basedir/../browserslist/cli.js" $args
  }
  $ret=$LASTEXITCODE
} else {
  # Support pipeline input
  if ($MyInvocation.ExpectingInput) {
    $input | & "node$exe"  "$basedir/../browserslist/cli.js" $args
  } else {
    & "node$exe"  "$basedir/../browserslist/cli.js" $args
  }
  $ret=$LASTEXITCODE
}
$env:NODE_PATH=$env_node_path
exit $ret
