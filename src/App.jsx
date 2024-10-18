import { useState } from 'react'

//https://github.com/momentum-design/momentum-design/blob/main/CONSUMPTION.md
import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/typography/complete.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-stable.css';
import '@momentum-design/tokens/dist/css/theme/webex/light-stable.css';
import Colors from './Colors'

// momentum-react-v2 https://www.npmjs.com/package/@momentum-ui/react-collaboration
import { Button, AvatarMeetingsListItem, Chip } from '@momentum-ui/react-collaboration';
import '@momentum-ui/react-collaboration/css/momentum-ui.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Momentum Design + React testing</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
     
     <Button>Hello world, I'm a MDS react v2 button</Button>
     
      <Colors />
      <Chip
  chipColor="cobalt"
  className=""
  id=""
  leftIcon=""
  outline
  style={{}}
  text="Hello World"
>Hello world</Chip>
      <AvatarMeetingsListItem
  avatarProps={{
    presence: 'active',
    title: 'Kristian'
  }}
  firstLine="This is a first line"
  onHoverActionCallback={function noRefCheck(){}}
  onPressMuteAction={function noRefCheck(){}}
  secondLine="This is a second line"
/>

<AvatarMeetingsListItem
  avatarProps={{
    presence: 'busy',
    title: 'Hello world'
  }}
  firstLine="This is a first line"
  onHoverActionCallback={function noRefCheck(){}}
  onPressMuteAction={function noRefCheck(){}}
  schedulerState="quiet-hours"
  secondLine="This is a second line"
/>



       <mdc-iconprovider className="mds-theme-stable-darkWebex" url="./icons/svg">
        <mdc-themeprovider id="theme-provider" themeClass="mds-theme-stable-lightWebex">
          <mdc-themeprovider className="custom-classname" style={{ marginTop: '20px' }} themeClass="mds-theme-stable-darkWebex">
            <div className="themeWrapper">
              <mdc-subcomponent></mdc-subcomponent>
              <p>light theme Color examples:</p>
              <div className="mds-theme-stable-lightWebex">
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-primary-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-error-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-warning-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-success-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-accent-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-team-cobalt-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-team-cyan-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-team-mint-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-team-lime-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-team-gold-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-team-orange-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-team-pink-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-team-purple-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-team-violet-normal)' }}></div>
                <div className="colorBox" style={{ background: 'var(--mds-color-theme-text-team-slate-normal)' }}></div>
              </div>
            </div>
          </mdc-themeprovider>
        </mdc-themeprovider>
      </mdc-iconprovider>


    </>
  )
}

export default App
