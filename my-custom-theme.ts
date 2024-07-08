
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
		// surface | #9a8c74 
		"--color-surface-50": "240 238 234", // #f0eeea
		"--color-surface-100": "235 232 227", // #ebe8e3
		"--color-surface-200": "230 226 220", // #e6e2dc
		"--color-surface-300": "215 209 199", // #d7d1c7
		"--color-surface-400": "184 175 158", // #b8af9e
		"--color-surface-500": "154 140 116", // #9a8c74
		"--color-surface-600": "139 126 104", // #8b7e68
		"--color-surface-700": "116 105 87", // #746957
		"--color-surface-800": "92 84 70", // #5c5446
		"--color-surface-900": "75 69 57", // #4b4539
		
	}
}