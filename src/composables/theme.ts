/**
 * @see https://vueuse.org/core/useDark
 */
const isDark = useDark({
  initialValue: sitePreference.value.theme,
  onChanged(isDark, handler, mode) {
    sitePreference.value.theme = isDark ? 'dark' : 'light'

    handler(mode)
  },
})

/**
 * @see https://vueuse.org/shared/useToggle
 */
export const toggleTheme = useToggle(isDark)
