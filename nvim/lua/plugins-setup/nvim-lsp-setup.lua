-- nvim-lsp-setup.lua

local capabilities = require('cmp_nvim_lsp').default_capabilities()
local servers = { 'gopls', 'clangd', 'jdtls', 'pylsp', 'lua_ls', 'bashls', 'ansiblels', 'yamlls', 'html', 'tsserver', 'rust_analyzer' }

for _, server in ipairs(servers) do
	require('lspconfig')[server].setup {
		capabilities = capabilities
	}
end

require('lspconfig')['lua_ls'].setup {
	settings = {
		Lua = {
			diagnostics = {
				globals = { 'vim' },
				disable = {
					'trailing-space'
				}
			}
		},
	}
}

--Enable (broadcasting) snippet capability for completion
local html_capabilities = require('cmp_nvim_lsp').default_capabilities()
html_capabilities.textDocument.completion.completionItem.snippetSupport = true
 
require('lspconfig')['html'].setup  {
	capabilities = html_capabilities,
	init_options = {
		configurationSection = { "html", "css", "javascript" },
		embeddedLanguages = {
			css = true,
			javascript = true
		},
		provideFormatter = true
	}
}
