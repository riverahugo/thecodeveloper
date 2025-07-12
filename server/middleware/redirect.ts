export default defineEventHandler((event) => {
  const host = getRequestHeader(event, 'host')
  const url = getRequestURL(event)

  if (host === 'thecodeveloper.com') {
    return sendRedirect(event, `https://www.thecodeveloper.com${url.pathname}`, 301)
  }
})
