-- theme.lua

local M = {}
local set = vim.opt

function M.set(mode)
	set.background = mode
end

return M
