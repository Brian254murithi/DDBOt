import './app-logo.scss';

export const AppLogo = () => {
    return (
        <a className='app-header__logo' href='/' aria-label='BrianDev AI Nexus Pro'>
            <img
                src='/briandev-logo.png'
                alt='BrianDev AI Nexus Pro'
                style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
            />
        </a>
    );
};
