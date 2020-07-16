import Router from 'next/router'
import nextCookie from 'next-cookies'

export const auth = ctx => {
  const { token } = nextCookie(ctx)

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/auth' })
    ctx.res.end()
    return
  }

  if (!token) {
    Router.push('/auth')
  }

  return token
}


export const logout = () => {
  cookie.remove("token");
  Router.push("/login");
};



// Gets the display name of a JSX component for dev tools
const getDisplayName = Component =>
  Component.displayName || Component.name || 'Component'

export const withAuthSync = WrappedComponent =>
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`

    static async getInitialProps (ctx) {
      const token = auth(ctx)

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return { ...componentProps, token }
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
}
