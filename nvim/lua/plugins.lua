-- File containig neovim plugins. Managed by packer.nvim

vim.cmd [[packadd packer.nvim]]

return require('packer').startup(function(use)

    -- packer
	use 'wbthomason/packer.nvim'

    -- treesitter	
    use 'nvim-treesitter/nvim-treesitter'

	-- file explorer plugins
	use {
		'nvim-tree/nvim-tree.lua',
		requires = { 'nvim-tree/nvim-web-devicons' },
	}

    -- just some cute pets :)
    use {
        "giusgad/pets.nvim",
        requires = {
            "giusgad/hologram.nvim",
            "MunifTanjim/nui.nvim",
        }
    }

	-- greeter plugins
	use {
		'goolord/alpha-nvim',
		requires = { 'nvim-tree/nvim-web-devicons' },
	}

	-- telescope plugins
	use {
		'nvim-telescope/telescope.nvim', tag = '0.1.1',
		requires = { {'nvim-lua/plenary.nvim'} }
	}

	use 'kdheepak/lazygit.nvim'		-- git integration
	use 'windwp/nvim-autopairs'		-- auto closing brackets
	use 'windwp/nvim-ts-autotag'	-- auto closing html tags

	-- autocomplete plugins
	use {
		'neovim/nvim-lspconfig',	-- neovim LSP client config
		'hrsh7th/cmp-nvim-lsp',     -- nvim-cmp source for neovim builtin LSP client
		'hrsh7th/cmp-buffer',       -- nvim-cmp source for buffer words
		'hrsh7th/cmp-path',         -- nvim-cmp source for filesystem paths
		'hrsh7th/cmp-cmdline',      -- nvim-cmp source for vim cmdline
		'hrsh7th/nvim-cmp',         -- completion plugin

		'L3MON4D3/LuaSnip',
        'rafamadriz/friendly-snippets',
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
