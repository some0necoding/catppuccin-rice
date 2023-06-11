-- autocmds.lua

local set = vim.opt
local setlocal = vim.opt_local

-- configure c-style programming languages' files
vim.api.nvim_create_autocmd({ "BufRead", "BufNewFile" }, {
    pattern = { "*.c", "*.h", "*.cpp", "*.hpp", "*.go", },
    callback = function()
        setlocal.colorcolumn = "80"
    end,
})

-- configure web development files
vim.api.nvim_create_autocmd({ "BufRead", "BufNewFile" }, {
    pattern = { "*.html", "*.css", "*.js", "*.ts", "*.jsx", "*.tsx" },
    callback = function()
        set.tabstop = 2					-- tab width
        set.softtabstop = 2				-- see multiple spaces as tabstops so <BS> does the right thing
        set.shiftwidth = 2				-- width for autoindents
    end,
})
