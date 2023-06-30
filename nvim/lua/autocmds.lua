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

-- open nvim-tree when entering buffer
vim.api.nvim_create_autocmd({ "BufWinEnter", "BufNewFile" }, {
    pattern = { "*.*" },
    command = "NvimTreeOpen"
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
        setlocal.tabstop = 2	                -- tab width
        setlocal.softtabstop = 2				-- see multiple spaces as tabstops so <BS> does the right thing
        setlocal.shiftwidth = 2				    -- width for autoindents
    end,
})

-- remember cursor position accross file openings
vim.api.nvim_create_autocmd({ "BufReadPost" }, {
    callback = function()
		local row, col = unpack(vim.api.nvim_buf_get_mark(0, "\""))
		if {row, col} ~= {0, 0} then
			vim.api.nvim_win_set_cursor(0, {row, 0})
	    end
	end,
})
