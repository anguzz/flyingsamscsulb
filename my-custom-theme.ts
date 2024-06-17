
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #fd7c51 
		"--color-primary-50": "255 235 229", // #ffebe5 
		"--color-primary-100": "255 229 220", // #ffe5dc
		"--color-primary-200": "255 222 212", // #ffded4
		"--color-primary-300": "254 203 185", // #fecbb9
		"--color-primary-400": "254 163 133", // #fea385
		"--color-primary-500": "253 124 81", // #fd7c51
		"--color-primary-600": "228 112 73", // #e47049
		"--color-primary-700": "190 93 61", // #be5d3d
		"--color-primary-800": "152 74 49", // #984a31
		"--color-primary-900": "124 61 40", // #7c3d28
		// secondary | #11a3d2 
		"--color-secondary-50": "219 241 248", // #dbf1f8
		"--color-secondary-100": "207 237 246", // #cfedf6
		"--color-secondary-200": "196 232 244", // #c4e8f4
		"--color-secondary-300": "160 218 237", // #a0daed
		"--color-secondary-400": "88 191 224", // #58bfe0
		"--color-secondary-500": "17 163 210", // #11a3d2
		"--color-secondary-600": "15 147 189", // #0f93bd
		"--color-secondary-700": "13 122 158", // #0d7a9e
		"--color-secondary-800": "10 98 126", // #0a627e
		"--color-secondary-900": "8 80 103", // #085067
		// tertiary | #f0b7f7 
		"--color-tertiary-50": "253 244 254", // #fdf4fe
		"--color-tertiary-100": "252 241 253", // #fcf1fd
		"--color-tertiary-200": "251 237 253", // #fbedfd
		"--color-tertiary-300": "249 226 252", // #f9e2fc
		"--color-tertiary-400": "245 205 249", // #f5cdf9
		"--color-tertiary-500": "240 183 247", // #f0b7f7
		"--color-tertiary-600": "216 165 222", // #d8a5de
		"--color-tertiary-700": "180 137 185", // #b489b9
		"--color-tertiary-800": "144 110 148", // #906e94
		"--color-tertiary-900": "118 90 121", // #765a79
		// success | #5a8512 
		"--color-success-50": "230 237 219", // #e6eddb
		"--color-success-100": "222 231 208", // #dee7d0
		"--color-success-200": "214 225 196", // #d6e1c4
		"--color-success-300": "189 206 160", // #bdcea0
		"--color-success-400": "140 170 89", // #8caa59
		"--color-success-500": "90 133 18", // #5a8512
		"--color-success-600": "81 120 16", // #517810
		"--color-success-700": "68 100 14", // #44640e
		"--color-success-800": "54 80 11", // #36500b
		"--color-success-900": "44 65 9", // #2c4109
		// warning | #d50500 
		"--color-warning-50": "249 218 217", // #f9dad9
		"--color-warning-100": "247 205 204", // #f7cdcc
		"--color-warning-200": "245 193 191", // #f5c1bf
		"--color-warning-300": "238 155 153", // #ee9b99
		"--color-warning-400": "226 80 77", // #e2504d
		"--color-warning-500": "213 5 0", // #d50500
		"--color-warning-600": "192 5 0", // #c00500
		"--color-warning-700": "160 4 0", // #a00400
		"--color-warning-800": "128 3 0", // #800300
		"--color-warning-900": "104 2 0", // #680200
		// error | #1271d3 
		"--color-error-50": "219 234 248", // #dbeaf8
		"--color-error-100": "208 227 246", // #d0e3f6
		"--color-error-200": "196 220 244", // #c4dcf4
		"--color-error-300": "160 198 237", // #a0c6ed
		"--color-error-400": "89 156 224", // #599ce0
		"--color-error-500": "18 113 211", // #1271d3
		"--color-error-600": "16 102 190", // #1066be
		"--color-error-700": "14 85 158", // #0e559e
		"--color-error-800": "11 68 127", // #0b447f
		"--color-error-900": "9 55 103", // #093767
		// surface | #998575 
		"--color-surface-50": "240 237 234", // #f0edea
		"--color-surface-100": "235 231 227", // #ebe7e3
		"--color-surface-200": "230 225 221", // #e6e1dd
		"--color-surface-300": "214 206 200", // #d6cec8
		"--color-surface-400": "184 170 158", // #b8aa9e
		"--color-surface-500": "153 133 117", // #998575
		"--color-surface-600": "138 120 105", // #8a7869
		"--color-surface-700": "115 100 88", // #736458
		"--color-surface-800": "92 80 70", // #5c5046
		"--color-surface-900": "75 65 57", // #4b4139
		
	}
}