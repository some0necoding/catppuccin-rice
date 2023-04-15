-- File containig neovim plugins. Managed by packer.nvim

vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)

	use 'wbthomason/packer.nvim'

	-- file explorer plugins
	use {
		'nvim-tree/nvim-tree.lua',
		requires = { 'nvim-tree/nvim-web-devicons' },
	}

	-- greeter plugins
	use {
		'goolord/alpha-nvim',
		requires = { 'nvim-tree/nvim-web-devicons' },
		-- config = function ()
		--	require('alpha').setup(require('alpha.themes.custom').config)
		-- end
	}

	-- telescope plugins
	use {
		'nvim-telescope/telescope.nvim', tag = '0.1.1',
		requires = { {'nvim-lua/plenary.nvim'} }
	}

	use 'kdheepak/lazygit.nvim'		-- git integration
	use 'echasnovski/mini.nvim'
	use 'windwp/nvim-autopairs'		-- auto closing brackets

	-- TODO: golang workflow plugins
	
	-- autocomplete plugins
	use {
		'neovim/nvim-lspconfig',	-- LSP config

		'hrsh7th/cmp-nvim-lsp',
		'hrsh7th/cmp-buffer',
		'hrsh7th/cmp-path',
		'hrsh7th/cmp-cmdline',
		'hrsh7th/nvim-cmp',

		'L3MON4D3/LuaSnip',
		'saadparwaiz1/cmp_luasnip',
	}

	-- colorschemes
	use {
		'sainnhe/everforest',
		'rebelot/kanagawa.nvim',
		'shaunsingh/nord.nvim',
		'ellisonleao/gruvbox.nvim',
		'folke/tokyonight.nvim',
		'catppuccin/nvim',
		'EdenEast/nightfox.nvim',
		'rose-pine/neovim',
		'tanvirtin/monokai.nvim',
	}

	-- lualine
	use {
		'nvim-lualine/lualine.nvim',
		requires = { 'kyazdani42/nvim-web-devicons', opt = true }
	}

end)
