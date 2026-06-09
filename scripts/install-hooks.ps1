# Instala hook post-commit para push automático
$hooks = Join-Path (Split-Path -Parent $PSScriptRoot) '.git\hooks'
$src = Join-Path (Split-Path -Parent $PSScriptRoot) '.githooks\post-commit'
Copy-Item $src "$hooks\post-commit" -Force
Write-Host 'Hook post-commit instalado — todo commit faz push automatico.'
