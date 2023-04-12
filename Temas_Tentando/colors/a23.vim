set background=dark
highlight clear
syntax reset

let g:colors_name='a23'

"CORES USAR EM VARS
"pink=#ff79c6 blue1=#7dcfff blue2=#0099e6 gray1=#4a5882 green1=#00cc00 red1=#ff5555, purple=#bd93f9

"SCHEMA_DRACULA :: Keyword>>pink, Comment=gray1, Function=green1, Identifier=purple, Type=blue2

"significados: Label=chavesInterpolador , Identifier=identificador/NomeVars/const/new, Type=tiposUsados, Structure=Classe/Objetos,

hi Boolean            guibg=NONE         guifg=#ffffff
hi Character          guibg=NONE         guifg=#ffffff
hi ColorColumn        guibg=NONE         guifg=#ffffff
hi Comment            guibg=NONE         guifg=#4a5882
hi Condtional         guibg=NONE         guifg=#ffffff
hi Constant           guibg=NONE         guifg=#ffb86c
hi CursorColumn       guibg=NONE         guifg=#ffffff
hi Cursor             guibg=NONE         guifg=#ffffff
hi CursorLine         guibg=#16161E      guifg=#NONE     gui=bold "muda cor onde eta o cursor
hi CursorLineNr       guibg=NONE         guifg=#ffffff     gui=bold gui=bold
hi Debug              guibg=NONE         guifg=#ffffff
hi Define             guibg=NONE         guifg=#ffffff
hi Delimiter          guibg=NONE         guifg=#ffffff
hi DiffAdd            guibg=NONE         guifg=#ffffff
hi DiffChange         guibg=NONE         guifg=#ffffff
hi DiffDelete         guibg=NONE         guifg=#ffffff
hi DiffText           guibg=NONE         guifg=#ffffff
hi Directory          guibg=NONE         guifg=#ffffff
hi Error              guibg=NONE         guifg=#ffffff
hi ErrorMsg           guibg=NONE         guifg=#ffffff
hi Exception          guibg=NONE         guifg=#ffffff
hi Float              guibg=NONE         guifg=#ffffff
hi FoldColumn         guibg=NONE         guifg=#ffffff
hi Folded             guibg=NONE         guifg=#ffffff
hi Function           guibg=NONE         guifg=#00cc00
hi Identifier         guibg=NONE         guifg=#bd93f9
hi Include            guibg=NONE         guifg=#ffffff
hi IncSearch          guibg=NONE         guifg=#ffffff
hi Keyword            guibg=NONE         guifg=#ff79c6
hi Label              guibg=NONE         guifg=#ff79c6 
hi LineNr             guibg=NONE         guifg=#414868
hi Macro              guibg=NONE         guifg=#ffffff
hi MatchParen         guibg=NONE         guifg=#ffffff
hi ModeMsg            guibg=NONE         guifg=#ffffff
hi MoreMsg            guibg=NONE         guifg=#ffffff
hi NonText            guibg=NONE         guifg=#ffffff
hi Normal             guibg=NONE         guifg=#ffffff
hi Number             guibg=NONE         guifg=#b800e6
hi Operator           guibg=NONE         guifg=#ffffff
hi Pmenu              guibg=NONE         guifg=#ffffff
hi PmenuSbar          guibg=NONE         guifg=#ffffff
hi PmenuSel           guibg=NONE         guifg=#8787af        gui=bold
hi PmenuThumb         guibg=NONE         guifg=#ffffff
hi PreCondit          guibg=NONE         guifg=#ffffff
hi PreProc            guibg=NONE         guifg=#ffffff
hi Question           guibg=NONE         guifg=#ffffff
hi Repeat             guibg=NONE         guifg=#ffffff
hi Search             guibg=#2ac3de      guifg=#1a1b26
hi SpecialChar        guibg=NONE         guifg=#ffffff
hi SpecialComment     guibg=NONE         guifg=#ffffff
hi Special            guibg=NONE         guifg=#ffffff
hi SpecialKey         guibg=NONE         guifg=#ffffff
hi SpellBad           guibg=bcbcbc       guifg=#000000
hi SpellCap           guibg=NONE         guifg=#bcbcbc
hi SpellLocal         guibg=NONE         guifg=#bcbcbc
hi SpellRare          guibg=NONE         guifg=#bcbcbc
hi Statement          guibg=NONE         guifg=#ffffff
hi StatusLine         guibg=#b4f9f8      guifg=#1a1b26
hi StatusLineNC       guibg=NONE         guifg=#bcbcbc
hi StorageClass       guibg=NONE         guifg=#bcbcbc
hi String             guibg=NONE         guifg=#b4f9f8
hi Structure          guibg=NONE         guifg=#7dcfff
hi TabLineFill        guibg=NONE         guifg=#ffffff
hi Tag                guibg=NONE         guifg=#ffffff
hi Title              guibg=NONE         guifg=#ffffff
hi Todo               guibg=NONE         guifg=#585858
hi Type               guibg=NONE         guifg=#7dcfff
hi Typedef            guibg=NONE         guifg=#5f00af
hi VertSplit          guibg=NONE         guifg=#ffffff
hi Visual             guibg=#b4f9f8      guifg=#000000
hi VisualNOS          guibg=NONE         guifg=#ffffff
hi WarningMsg         guibg=NONE         guifg=#ffffff
hi WildMenu           guibg=NONE         guifg=#ffffff

"hi def link diffCommon Statement
"hi def link diffRemoved DiffDelet
"hi def lin diffChanged DiffChang
"hi def link diffAdded DiffAdd
