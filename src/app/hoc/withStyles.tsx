
/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "./Button"
import Text from "./Text"

function withStyles(Component: any) {
    const WrappedComponent = (props: any) => {
      const style = { padding: '0.2rem', margin: '1rem', fontSize: '1.5rem' }
      return <Component style={style} {...props} />
    }

    return WrappedComponent;
  }
  
  const StyledButton = withStyles( Button )
  const StyledText = withStyles( Text )

  export { StyledButton, StyledText }