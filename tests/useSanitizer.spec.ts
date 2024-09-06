import { describe, it, expect } from 'vitest'
import { useSanitizer } from '../src/composables/useSanitizer'

describe('useSanitizer', () => {
    it('sanitizes a valid URL', () => {
        const { sanitizeUrl } = useSanitizer()
        const url = 'https://example.com'
        const sanitizedUrl = sanitizeUrl(url)

        expect(sanitizedUrl).toBe(url)
    })

    it('sanitizes a vulnerable URL', () => {
        const { sanitizeUrl } = useSanitizer()
        const url = `javascript: alert('script kitties attack!! 🐱⚔️')`
        const sanitizedUrl = sanitizeUrl(url)

        expect(sanitizedUrl).toBe('about:blank')
    })
})
