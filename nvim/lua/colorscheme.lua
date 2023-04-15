-- colorscheme.lua

local M = {}

function M.set(colorscheme)
	vim.cmd('colorscheme ' .. colorscheme)
end

return M
