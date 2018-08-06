set nu
set shiftwidth=4
set showmatch
set smartcase
set ruler
set hlsearch
set tabstop=4


set fileencodings=utf-8,cp949
if has("syntax")
	syntax on
endif
set autoindent
set cindent

set background=dark
colorscheme delek

au BufReadPost *
\ if line("'\"") > 0 && line("'\"") <= line("$") |
\ exe "norm g`\"" |
\ endif

set laststatus=2
set statusline=\ %<%l:%v\ [%P]%=%a\ %h%m%r\ %F\
