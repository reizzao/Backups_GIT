# *** =======  BASHRC PERSONALIZADO  ======================= ***

# VARIAVEIS DE AMBIENTE PACOTES DEV
export PATH="$HOME/go/bin:$PATH" # GOLANG
export PATH="$HOME/.poetry/bin:$PATH" # POETRY PYTHON
export PATH="$PATH:/usr/lib/dart/bin" # DART
export PATH="$PATH:~/development/flutter/bin" # FLUTTER

# ==== LINKS PARA OUTROS ARQUIVOS PERSONALIZADOS DE CONFIGURACAO BASH DE APLICATIVOS :
# OBS: CADA ARQUIVO TEM QUE SER .nome sem extensao para ser um sh reconhecido pelo bash

if [ -f $HOME/x/PC/_Personal_Bash_/.bashSistem_RZJ ]; then
    . $HOME/x/PC/_Personal_Bash_/.bashSistem_RZJ
fi

