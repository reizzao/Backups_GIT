
     -- API VIMRC --

     vim.cmd([[ syntax on ]])
     -- ajudar na syntaxe das linguagens

     vim.cmd([[ syntax enable  ]])
     -- Habilitar syntax highlighing

     -- AutoSave - TODO NAO FUNCIONANDO --
     vim.cmd([[ set autowriteall ]])

     vim.cmd([[ let extension = expand('%:e') ]])
     vim.cmd([[ let filenamev = expand('%:t') ]])

     -- SET MAPLEADER -> TODO

     vim.cmd([[ set noswapfile ]])
     -- desabilita criação de arquivo  backup .swp

     vim.cmd([[ confirm ]])
     -- pede confirmações antes de ação

     vim.cmd([[ set title ]])
     -- mostra titulo ???

     -- DESIGNS --

     -- CURSOR --
     vim.cmd([[ set guicursor= ]])
     -- definir cursor como nada assume o I-Beam se tiver configurado no terminal.

     vim.cmd([[ set nowrap ]])
     -- Exibir linhas longas como apenas uma linha : Display long lines as just one line

     vim.cmd([[ set encoding=utf-8  ]])
     -- A codificação exibida : The encoding displayed

     vim.cmd([[ set pumheight=10 ]])
     -- Makes popup menu smaller : tornar menu popup menor

     vim.cmd([[ set fileencoding=utf-8  ]])
     -- A codificação gravada no arquivo : The encoding written to file :

     vim.cmd([[ set cmdheight=1 ]])
     -- Mais espaço para exibição de mensagens : More space for displaying messages

     vim.cmd([[ set iskeyword+=- ]])
     -- tratar palavras separadas por travessão como um objeto de texto de palavra : treat dash separated words as a word text object

     vim.cmd([[ set mouse=a ]])
     -- Habilita mouse : Enable your mouse

     vim.cmd([[ set splitbelow ]])
     -- As divisões horizontais estarão automaticamente abaixo : Horizontal splits will automatically be below

     vim.cmd([[ set splitright  ]])
     -- Vertical splits will automatically be to the right

     vim.cmd([[ set t_Co=256 ]])
     -- Suporta 256 cores : Support 256 colors

     vim.cmd([[ set conceallevel=0 ]])

     -- Para que eu possa ver  em arquivos markdown : So that I can see in markdown files

     -- IDENTACAO
     vim.cmd([[ set tabstop=4 ]])
     -- Insert 2 spaces for a tab

     vim.cmd([[ set shiftwidth=2 ]])
     -- Alterar o número de caracteres de espaço inseridos para recuo : Change the number of space characters inserted for indentation

     vim.cmd([[ set smarttab ]])
     -- Torna a tabulação mais inteligente e perceberá que você tem 2 contra 4 : Makes tabbing smarter will realize you have 2 vs 4

     vim.cmd([[ set expandtab ]])
     -- Converte tabulações em espaços  : Converts tabs to spaces

     vim.cmd([[ set smartindent ]])
     -- Torna o recuo inteligente : Makes indenting smart

     vim.cmd([[ set autoindent ]])
     -- Bom recuo automatico : Good auto indent

     vim.cmd([[ set laststatus=0 ]])
     -- Sempre exibir a linha de status : Always display the status line

     vim.cmd([[ set ruler ]])
     -- Mostrar a posição do cursor o tempo todo: Show the cursor position all the time

     -- LINHAS
     vim.cmd([[ set number  ]])
     -- mostrar numero das linhas : Show line numbers

     vim.cmd([[ set showtabline=1 ]])
     -- Sempre mostrar guias e a quantidade de tabs : Always show tabs

     -- AREA TRANSFERENCIA NVIM >> LINUX --
     vim.cmd([[ set clipboard=unnamedplus ]])
     -- compartilhar de área de transferência entre o Vim e o Linux

               -- Maps EDITIONS --

-- Salvar --
vim.cmd([[
  nnoremap <C-s> :w<CR>
  inoremap <C-s> <Esc>:w<CR>l
  vnoremap <C-s> <Esc>:w<CR>
]])

-- Copiar >> Colar -- Volta em modo insert --
vim.cmd([[
  noremap <C-c> "+y
  inoremap <C-c> "+y<CR>

  noremap <C-v> "+p
  inoremap <C-v> <Esc>"+p<Esc>i
]])

-- Deletar Linha --
vim.cmd([[
  nnoremap dd dd<CR>
  inoremap dd <Esc>dd<CR>
  vnoremap dd dd<Esc>i
]])

-- Refazer : alem de refazer >> tambem é solucao para conflito de zoom do terminator --
vim.cmd([[ map <C-r> g+ ]])
vim.cmd([[ nnoremap <C-r> g+ ]])
vim.cmd([[ inoremap <C-r> <Esc>g+ ]])
vim.cmd([[ vnoremap <C-r> <Esc>g+ ]])

-- Sair Forçado --
vim.cmd([[ map <A-q> :q!<CR> ]])
vim.cmd([[ nnoremap <A-q> :q!<CR> ]])
vim.cmd([[ inoremap <A-q> <Esc>:q!<CR>l ]])
vim.cmd([[ vnoremap <A-q> <Esc>:q!<CR> ]])


-- Selecionar Tudo
vim.cmd([[ map <C-a> ggVG ]])

-- Refazer C-Z --
vim.cmd([[ map <C-z> :undo<CR> ]])
vim.cmd([[ nnoremap <C-z> :undo<CR> ]])
vim.cmd([[ inoremap <C-z> <Esc>:undo<CR>l ]])
vim.cmd([[ vnoremap <C-z> <Esc>:undo<CR> ]])

-- BUFFERS --
-- proximo buffer
vim.cmd([[ map <S-Tab> :bnext<CR> ]])
-- deletar buffer
vim.cmd([[ map <A-w> :bdelete<CR> ]])

-- identar >> iEsta funcionando com  Maior e Menor Que < > sendo com alt ou ctrl ou sozinho rs --
vim.cmd([[
  nnoremap . >>
  nnoremap , <<

  inoremap <C-.> <Esc><gv
  inoremap <C-,> <Esc>>gv

  vnoremap , <gv
  vnoremap . >gv
 ]])

 -- TABS --
 vim.cmd([[
   noremap <Tab> :tabnext<CR>
   ]])



-- TRANSFORMAR -> TOGGLE ==> MAIUSCULA -> MINUSCULA
-- uso: só colocar o cursor no meio do texto e executar o atalho
-- todo: esta funcionando somente Maiusculo
vim.cmd([[
  inoremap <C-u> <ESC>viwUi " pra maiuscula em insert
  nnoremap <C-u> viwU<Esc> " pra minuscula em normal
]])

-- SUBSTITUIÇÃO TODAS OCORRENCIAS DIGITADAS
-- para usar execute o atalho -> volte uma barra com a seta e digite A PROCURA -> após a proxima barra digite o que  vai substituir a procura encontrada
vim.cmd([[
  nnoremap <A-s> :%s///g<Left><Left>
  nnoremap <A-sc> :%s///gc<Left><Left><Left>

  xnoremap <A-s> :s///g<Left><Left>
  xnoremap <A-sc> :s///gc<Left><Left><Left>

  vnoremap * y/\V<C-R>=escape(@",'/\')<CR><CR>

]])

-- Movimentacoes --
-- Mover linhas --
vim.cmd([[
  nnoremap <S-down> :m .+1<CR>==
  nnoremap <S-up> :m .-2<CR>==
  inoremap <S-down> <Esc>:m .+1<CR>==gi
  inoremap <S-up> <Esc>:m .-2<CR>==gi
  vnoremap <S-down> :m '>+1<CR>gv=gv
  vnoremap <S-up> :m '<-2<CR>gv=gv
]])

-- Redimensionar janelas >Somente com SETAS LATERAIS em Normal mode > tanto painel e terminal --
vim.cmd([[
  nnoremap <C-up>    :resize -2<CR>
  nnoremap <C-down>  :resize +2<CR>
  nnoremap <C-left>  <Esc>:vertical resize -2<CR>
  nnoremap <C-right> <Esc>:vertical resize +2<CR>
]])

-- INICIAL -- Cursor DeOndeParou --
vim.cmd([[
  hi! MatchParen cterm=NONE,bold gui=NONE,bold guibg=NONE guifg=#FFFF00
  if has("autocmd")
    au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$") | exe "normal! g`\"" | endif
  endif
]])


-- carregar automaticamente o packer e compilar - nao precisa ficar abrindo e fechando a novas instalacaoes. --
vim.cmd([[
  augroup packer_user_config
    autocmd!
    autocmd BufWritePost plugins.lua source <afile> | PackerCompile
  augroup end
]])

-- BASH - Auto preenche arquivos .sh que não existirem com a SheBang --
vim.cmd([[ autocmd BufNewFile *.sh :call append(0, '#!/usr/bin/env bash') ]])

-- Se não existir o arquivo C++ de extensão .cpp ele preenche da forma abaixo --
-- altere para sua(s) linguagens preferidas --
vim.cmd([[
	function! AutoCpp()
	  call append(0, '#include <iostream>')
	  call append(1, '')
	  call append(2, 'int main( int argc , char **argv ){')
	  call append(3, "  std::cout << \"Hello, World!\" << '\\n';")
	  call append(4, '  return 0;')
	  call append(5, '}')
	  call cursor(4, 17)
	endfunction
        autocmd BufNewFile *.cpp :call AutoCpp()
]])

vim.cmd([[
  function! AutoC()
    call append(0, '#include <stdio.h>')
    call append(1, '')
    call append(2, 'int main( int argc , char **argv ){')
    call append(3, "  printf(\"Hello, World!\\n\");")
    call append(4, '  return 0;')
    call append(5, '}')
    call cursor(4, 17)
  endfunction
  autocmd BufNewFile *.c :call AutoC()
]])

  -- Maps PLUGINS --

-- Comentario --
vim.cmd([[ filetype plugin on ]])
-- ativa os plug-ins de tipo de arquivo - Essencial para comentario
-- NERDCo

vim.cmd([[
  map cc <plug>NERDCommenterToggle
  nmap cc <plug>NERDCommenterToggle
  inoremap cc <C-o>:call NERDComment(0,"toggle")<C-m>
]]) -- maps comentario NERDCommenter

-- EXPLORER
-- explorer Float -> NeoTreeFloatToggle
vim.cmd([[ nnoremap <A-e> :NeoTreeFloatToggle<CR> ]])
vim.cmd([[ inoremap <A-e> :NeoTreeFloatToggle<CR> ]])
vim.cmd([[ vnoremap <A-e> :NeoTreeFloatToggle<CR> ]])

-- FIND FLOAT
-- Find -> Telescope -- TODO -- ESTA DANDO ERRO - PARECE QUE O PROBLEMA ESTA NO PROPRIO TELESCOPE
-- Find com telescope
vim.cmd([[ nnoremap <A-f> :Telescope find_files<CR> ]])
vim.cmd([[ inoremap <A-f> :Telescope find_files<CR> ]])
vim.cmd([[ vnoremap <A-f> :Telescope find_files<CR> ]])
-- Find buffers com -> telescope
vim.cmd([[ nnoremap <A-b> :Telescope buffers<CR> ]])
vim.cmd([[ inoremap <A-b> :Telescope buffers<CR> ]])
vim.cmd([[ vnoremap <A-b> :Telescope buffers<CR> ]])

-- Telescope - procurar com grep
vim.cmd([[ nnoremap <C-k> :lua require('telescope.builtin').grep_string({ search = vim.fn.input("Grep For > ") })<CR>
]])

-- by VIM_AIRLINE :
vim.cmd([[
  let g:airline_left_sep = ''
  " powerline symbols
  let g:airline_left_sep = ''
  let g:airline_left_alt_sep = ''
  let g:airline_right_sep = ''
  let g:airline_right_alt_sep = ''
]])
-- definir o tema em uso do vim airline
vim.cmd([[
  let g:airline_theme='violet'
]])

-- Maps TERMINAL --

-- terminal float
vim.cmd([[ nnoremap <S-t> :FloatermNew<CR> ]])
vim.cmd([[ inoremap <S-t> <Esc>:FloatermNew<CR>l ]])
vim.cmd([[ vnoremap <S-t> <Esc>:FloatermNew<CR> ]])


-- TERMINAL Vsplit Vertical --
vim.cmd([[ nmap tt :vsplit term://bash<CR> ]])

vim.cmd [[
  autocmd TermOpen * setlocal listchars= nonumber norelativenumber nocursorline
  autocmd TermOpen * startinsert
  autocmd BufLeave term://* stopinsert
]]

-- test test bla bla tt ooott t ooooo t
-- escolher bash do vsplit terminal : mudar entre [ bash || zsh]

-- vim.cmd([[ noremap <C-l> :let @/=<CR>]]) -- Limpa Clean  --> TODO

-- FUNÇÃO -> ABRE TERMINAL VSPLIT
-- vim.cmd([[
-- function! Run()
--   :echo 'Compiling...'
--   :terminal make
--   :bwipeout
-- endfunction

-- nnoremap <C-t> :call Run()<CR>
-- inoremap <C-t> :call Run()<CR>
-- vnoremap <C-t> :call Run()<CR>
-- ]])


