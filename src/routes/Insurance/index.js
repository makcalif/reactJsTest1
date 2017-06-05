import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'insurance',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Insurance = require('./containers/InsuranceContainer').default
      const reducer = require('./modules/insurance').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'insurance', reducer })

      /*  Return getComponent   */
      cb(null, Insurance)

    /* Webpack named bundle   */
    }, 'Insurance')
  }
})
