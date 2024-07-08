
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
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
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
		// success | #35d7a3 
		"--color-success-50": "225 249 241", // #e1f9f1
		"--color-success-100": "215 247 237", // #d7f7ed
		"--color-success-200": "205 245 232", // #cdf5e8
		"--color-success-300": "174 239 218", // #aeefda
		"--color-success-400": "114 227 191", // #72e3bf
		"--color-success-500": "53 215 163", // #35d7a3
		"--color-success-600": "48 194 147", // #30c293
		"--color-success-700": "40 161 122", // #28a17a
		"--color-success-800": "32 129 98", // #208162
		"--color-success-900": "26 105 80", // #1a6950
		// warning | #ff4a46 
		"--color-warning-50": "255 228 227", // #ffe4e3
		"--color-warning-100": "255 219 218", // #ffdbda
		"--color-warning-200": "255 210 209", // #ffd2d1
		"--color-warning-300": "255 183 181", // #ffb7b5
		"--color-warning-400": "255 128 126", // #ff807e
		"--color-warning-500": "255 74 70", // #ff4a46
		"--color-warning-600": "230 67 63", // #e6433f
		"--color-warning-700": "191 56 53", // #bf3835
		"--color-warning-800": "153 44 42", // #992c2a
		"--color-warning-900": "125 36 34", // #7d2422
		// error | #f3ed7c 
		"--color-error-50": "253 252 235", // #fdfceb
		"--color-error-100": "253 251 229", // #fdfbe5
		"--color-error-200": "252 251 222", // #fcfbde
		"--color-error-300": "250 248 203", // #faf8cb
		"--color-error-400": "247 242 163", // #f7f2a3
		"--color-error-500": "243 237 124", // #f3ed7c
		"--color-error-600": "219 213 112", // #dbd570
		"--color-error-700": "182 178 93", // #b6b25d
		"--color-error-800": "146 142 74", // #928e4a
		"--color-error-900": "119 116 61", // #77743d
		// surface | #f7e1cc 
		"--color-surface-50": "254 251 247", // #fefbf7
		"--color-surface-100": "253 249 245", // #fdf9f5
		"--color-surface-200": "253 248 242", // #fdf8f2
		"--color-surface-300": "252 243 235", // #fcf3eb
		"--color-surface-400": "249 234 219", // #f9eadb
		"--color-surface-500": "247 225 204", // #f7e1cc
		"--color-surface-600": "222 203 184", // #decbb8
		"--color-surface-700": "185 169 153", // #b9a999
		"--color-surface-800": "148 135 122", // #94877a
		"--color-surface-900": "121 110 100", // #796e64
		
	}
}