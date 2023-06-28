-- autocmds.lua

local setlocal = vim.opt_local

-- make folds persistent: save folds when closing buffers
vim.api.nvim_create_autocmd({ "BufWinLeave" }, {
    pattern = { "*.*" },
    command = "mkview"
})

-- make folds persistent: restore folds when opening buffers
vim.api.nvim_create_autocmd({ "BufWinEnter" }, {
    pattern = { "*.*" },
    command = "silent loadview"
})

-- configure c development environment
vim.api.nvim_create_autocmd({ "BufRead", "BufNewFile" }, {
    pattern = { "*.c", "*.h", "*.cpp", "*.hpp", "*.go", },
    callback = function()
        setlocal.colorcolumn = "80"             -- highlight column 80 for OS languages
    end,
})

-- configure web development environment
vim.api.nvim_create_autocmd({ "BufRead", "BufNewFile" }, {
    pattern = { "*.html", "*.css", "*.scss", "*.js", "*.ts", "*.jsx", "*.tsx", "*.yuck" },
    callback = function()
        setlocal.tabstop = 2					-- tab width
        setlocal.softtabstop = 2				-- see multiple spaces as tabstops so <BS> does the right thing
        setlocal.shiftwidth = 2				    -- width for autoindents
    end,
})
