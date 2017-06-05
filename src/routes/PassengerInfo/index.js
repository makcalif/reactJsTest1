import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'passengerInfo',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const PassengerInfo = require('./containers/PassengerInfoContainer').default
      const reducer = require('./modules/passengerInfo').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'passengerInfo', reducer })

      /*  Return getComponent   */
      cb(null, PassengerInfo)

    /* Webpack named bundle   */
    }, 'PassengerInfo')
  }
})
