-- nvim-cmp-setup.lua

local cmp = require'cmp'

cmp.setup({
	snippet = {
		-- REQUIRED - you must specify a snippet engine
		expand = function(args)
			require('luasnip').lsp_expand(args.body)            -- For luasnip users.
		end,
	},
    window = {
		completion = cmp.config.window.bordered(),
		documentation = cmp.config.window.bordered(),
    },
    mapping = cmp.mapping.preset.insert({
		['<Tab>'] = cmp.mapping.select_next_item(),		        -- Tab to select next item
		['<S-Tab>'] = cmp.mapping.select_prev_item(),	        -- Shift + Tab to select previous item
		['<C-b>'] = cmp.mapping.scroll_docs(-4),		        -- Ctrl + b to scroll docs backwards
		['<C-f>'] = cmp.mapping.scroll_docs(4),			        -- Ctrl + f to scroll docs forward
		['<C-Space>'] = cmp.mapping.complete(),			        -- Ctrl + Space to invoke suggestions
		['<C-e>'] = cmp.mapping.abort(),				        -- Ctrl + e to close suggestions
		['<CR>'] = cmp.mapping.confirm({ select = true }),      -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.
    }),
    sources = cmp.config.sources({
		{ name = 'nvim_lsp' },
		{ name = 'luasnip' },                                   -- For luasnip users.
    }, {
		{ name = 'buffer' },
    })
})

-- Set configuration for specific filetype.
--cmp.setup.filetype('filetype', {
	--sources = cmp.config.sources({}, {
	--	{ name = 'buffer' },
	--})
--})

-- Use buffer source for `/` and `?` (if you enabled `native_menu`, this won't work anymore).
cmp.setup.cmdline({ '/', '?' }, {
	mapping = cmp.mapping.preset.cmdline(),
	sources = {
		{ name = 'buffer' }
	}
})

-- Use cmdline & path source for ':' (if you enabled `native_menu`, this won't work anymore).
cmp.setup.cmdline(':', {
	mapping = cmp.mapping.preset.cmdline(),
	sources = cmp.config.sources({
		{ name = 'path' }
    }, {
		{ name = 'cmdline' }
    })
})

-- If you want insert `(` after select function or method item
local cmp_autopairs = require('nvim-autopairs.completion.cmp')
cmp.event:on(
  'confirm_done',
  cmp_autopairs.on_confirm_done()
)
