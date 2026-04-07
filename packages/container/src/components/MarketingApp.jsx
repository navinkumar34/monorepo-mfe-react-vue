import { useEffect, useRef } from 'react'

import { mount } from 'marketing/MarketingApp'

const MarketingApp = () => {
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current) {
            mount(ref.current)
        }
    }, [])
    return (
        <div ref={ref}></div>
    )
}

export default MarketingApp