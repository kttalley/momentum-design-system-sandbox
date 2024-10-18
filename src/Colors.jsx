import '@momentum-design/fonts/dist/css/fonts.css';
import '@momentum-design/tokens/dist/css/typography/complete.css';
import '@momentum-design/tokens/dist/css/theme/webex/dark-stable.css';
// import '@momentum-design/tokens/dist/css/theme/webex/light-stable.css';
import './Colors.css';

function Colors() {
  let style = {
    background: 'purple'
  }
  return (
    <>
       <p>dark theme Color examples:</p>
              <div className="mds-theme-stable-darkWebex">
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
            
    </>
  );
};

export default Colors;