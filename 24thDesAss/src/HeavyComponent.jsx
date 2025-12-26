import React from 'react'

const HeavyComponent = () => {
    console.log("HeavyComponent rendered");

  return (
    <div>
        <h3>Heavy Component</h3>
        <p>This component should not re-render on Counter updates.</p>
    </div>
  )
}

export default React.memo(HeavyComponent);