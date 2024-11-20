import './ChartSVG.css';

const ChartSVG = (data) => {
    const serverData = data.data;
    const dev = serverData?.dev;
    const prod = serverData?.prod;
    const test = serverData?.test;
   
    const getSum = obj => obj && Object.values(obj).reduce((a, b) => a + b, 0) || 0;
    const sums = [getSum(dev), getSum(test), getSum(prod)];
    const maxValue = Math.max(...sums);

    const differences = [
        sums[1] - sums[0], 
        sums[2] - sums[1], 
    ];

    const maxHeightChartPx = 295;

    function testsToPx(value) {
        if (maxValue === 0) {
            console.log('Ошибка: Деление на ноль');
            return 0;
        } else {
            const testsToPxHeight = maxHeightChartPx/maxValue;
            return Math.round(testsToPxHeight * value);
        }
    };
    const devFrontPx = testsToPx(dev?.front);  
    const devBackPx = testsToPx(dev?.back);
    const devDBPx = testsToPx(dev?.db);

    const prodFrontPx = testsToPx(prod?.front);
    const prodBackPx = testsToPx(prod?.back);
    const prodDBPx = testsToPx(prod?.db);

    const testFrontPx = testsToPx(test?.front);
    const testBackPx = testsToPx(test?.back);
    const testDBPx = testsToPx(test?.db);

    const normTestPx = testsToPx(serverData?.norm);
    
    return (
        <>
        <div className='arrows__wrapper'>
            <div className='arrows__container'>
                <div className='arrows__item arrows__item--verticalLeft'>
                    <svg width="1" height="62" viewBox="0 0 1 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="61.5" x2="0.500003" y2="0.5" stroke="#898290" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className='arrows__item arrows__item--horizontal'>
                    <svg width="133" height="1" viewBox="0 0 133 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="0.5" x2="133" y2="0.5" stroke="#898290" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className='arrows__item arrows__item--verticalRight'>
                    <svg width="1" height="62" viewBox="0 0 1 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="61.5" x2="0.500003" y2="0.5" stroke="#898290" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className='arrows__item arrow__item--pointer'>
                    <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.02471 2.3672H3.97529L6.18863 0.140074C6.37424 -0.0466915 6.67518 -0.0466915 6.86079 0.140074C7.0464 0.32684 7.0464 0.629646 6.86079 0.816412L3.83608 3.85993C3.65047 4.04669 3.34953 4.04669 3.16392 3.85993L0.139209 0.816412C-0.0464029 0.629646 -0.0464029 0.32684 0.139209 0.140074C0.32482 -0.0466915 0.625755 -0.0466915 0.811367 0.140074L3.02471 2.3672Z" fill="#898290"/>
                    </svg>
                </div>
                <div className={(differences[0] >0) ? 'arrows__infoBox arrows__infoBox__good': 'arrows__infoBox arrows__infoBox__bad'}>
                    {(differences[0] >0) 
                        ? <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.99753 4.76701e-08L3.90761 4.65978e-08C3.81171 0.00457848 3.7172 0.0248462 3.62784 0.0599995C3.55932 0.0867379 3.49529 0.123836 3.438 0.17C3.3924 0.196522 3.34896 0.226616 3.30811 0.26L0.310604 3.12C0.215475 3.21061 0.139109 3.31909 0.0858683 3.43924C0.0326273 3.55939 0.00355357 3.68886 0.00030622 3.82025C-0.0062521 4.08562 0.0927855 4.34272 0.275633 4.535C0.45848 4.72728 0.710158 4.83899 0.975302 4.84556C1.24044 4.85212 1.49733 4.753 1.68946 4.57L2.99837 3.34L2.99837 9C2.99837 9.26522 3.10364 9.51957 3.29102 9.70711C3.4784 9.89464 3.73254 10 3.99753 10C4.26253 10 4.51667 9.89464 4.70405 9.70711C4.89143 9.51957 4.9967 9.26522 4.9967 9L4.9967 3.41L6.28563 4.71C6.37851 4.80373 6.48902 4.87812 6.61078 4.92889C6.73254 4.97966 6.86314 5.0058 6.99504 5.0058C7.12694 5.0058 7.25754 4.97966 7.3793 4.92889C7.50105 4.87812 7.61156 4.80373 7.70445 4.71C7.7981 4.61704 7.87243 4.50644 7.92316 4.38458C7.97388 4.26272 8 4.13201 8 4C8 3.86799 7.97388 3.73728 7.92316 3.61542C7.87243 3.49356 7.7981 3.38296 7.70445 3.29L4.70694 0.290001C4.61487 0.20005 4.5063 0.128743 4.38721 0.08C4.26399 0.0274634 4.13147 0.000257783 3.99753 4.76701e-08Z" fill="white"/>
                        </svg> 
                        : <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.00247 10L4.09239 10C4.18829 9.99542 4.2828 9.97515 4.37216 9.94C4.44068 9.91326 4.50471 9.87616 4.562 9.83C4.6076 9.80348 4.65104 9.77338 4.69189 9.74L7.6894 6.88C7.78452 6.78939 7.86089 6.68091 7.91413 6.56076C7.96737 6.44061 7.99645 6.31114 7.99969 6.17975C8.00625 5.91438 7.90721 5.65728 7.72437 5.465C7.54152 5.27272 7.28984 5.16101 7.0247 5.15444C6.75955 5.14788 6.50267 5.247 6.31054 5.43L5.00163 6.66L5.00163 1C5.00163 0.734783 4.89636 0.48043 4.70898 0.292893C4.5216 0.105357 4.26746 -1.63154e-07 4.00247 -1.74738e-07C3.73747 -1.86321e-07 3.48333 0.105357 3.29595 0.292893C3.10857 0.48043 3.0033 0.734783 3.0033 1L3.0033 6.59L1.71437 5.29C1.62149 5.19627 1.51098 5.12188 1.38922 5.07111C1.26746 5.02034 1.13686 4.9942 1.00496 4.9942C0.873059 4.9942 0.742462 5.02034 0.620704 5.07111C0.498946 5.12188 0.388438 5.19627 0.295552 5.29C0.201901 5.38296 0.127569 5.49356 0.0768425 5.61542C0.0261161 5.73728 2.20339e-07 5.86799 2.14569e-07 6C2.08798e-07 6.13201 0.0261161 6.26272 0.0768425 6.38458C0.127569 6.50644 0.201901 6.61704 0.295552 6.71L3.29306 9.71C3.38513 9.79995 3.4937 9.87126 3.61279 9.92C3.73601 9.97254 3.86853 9.99974 4.00247 10Z" fill="white"/>
                        </svg>
                    }
                    <p>{differences[0]}</p>
                </div>
            </div>
            <div className='arrows__container'>
                <div className='arrows__item arrows__item--verticalLeft'>
                    <svg width="1" height="62" viewBox="0 0 1 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="61.5" x2="0.500003" y2="0.5" stroke="#898290" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className='arrows__item arrows__item--horizontal'>
                    <svg width="133" height="1" viewBox="0 0 133 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="0.5" x2="133" y2="0.5" stroke="#898290" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className='arrows__item arrows__item--verticalRight'>
                    <svg width="1" height="62" viewBox="0 0 1 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="61.5" x2="0.500003" y2="0.5" stroke="#898290" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className='arrows__item arrow__item--pointer'>
                    <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.02471 2.3672H3.97529L6.18863 0.140074C6.37424 -0.0466915 6.67518 -0.0466915 6.86079 0.140074C7.0464 0.32684 7.0464 0.629646 6.86079 0.816412L3.83608 3.85993C3.65047 4.04669 3.34953 4.04669 3.16392 3.85993L0.139209 0.816412C-0.0464029 0.629646 -0.0464029 0.32684 0.139209 0.140074C0.32482 -0.0466915 0.625755 -0.0466915 0.811367 0.140074L3.02471 2.3672Z" fill="#898290"/>
                    </svg>
                </div>
                <div  className={(differences[1] >0) ? 'arrows__infoBox arrows__infoBox__good': 'arrows__infoBox arrows__infoBox__bad'}>
                    {(differences[1] >0) 
                    ? <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.99753 4.76701e-08L3.90761 4.65978e-08C3.81171 0.00457848 3.7172 0.0248462 3.62784 0.0599995C3.55932 0.0867379 3.49529 0.123836 3.438 0.17C3.3924 0.196522 3.34896 0.226616 3.30811 0.26L0.310604 3.12C0.215475 3.21061 0.139109 3.31909 0.0858683 3.43924C0.0326273 3.55939 0.00355357 3.68886 0.00030622 3.82025C-0.0062521 4.08562 0.0927855 4.34272 0.275633 4.535C0.45848 4.72728 0.710158 4.83899 0.975302 4.84556C1.24044 4.85212 1.49733 4.753 1.68946 4.57L2.99837 3.34L2.99837 9C2.99837 9.26522 3.10364 9.51957 3.29102 9.70711C3.4784 9.89464 3.73254 10 3.99753 10C4.26253 10 4.51667 9.89464 4.70405 9.70711C4.89143 9.51957 4.9967 9.26522 4.9967 9L4.9967 3.41L6.28563 4.71C6.37851 4.80373 6.48902 4.87812 6.61078 4.92889C6.73254 4.97966 6.86314 5.0058 6.99504 5.0058C7.12694 5.0058 7.25754 4.97966 7.3793 4.92889C7.50105 4.87812 7.61156 4.80373 7.70445 4.71C7.7981 4.61704 7.87243 4.50644 7.92316 4.38458C7.97388 4.26272 8 4.13201 8 4C8 3.86799 7.97388 3.73728 7.92316 3.61542C7.87243 3.49356 7.7981 3.38296 7.70445 3.29L4.70694 0.290001C4.61487 0.20005 4.5063 0.128743 4.38721 0.08C4.26399 0.0274634 4.13147 0.000257783 3.99753 4.76701e-08Z" fill="white"/>
                    </svg> 
                    : <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.00247 10L4.09239 10C4.18829 9.99542 4.2828 9.97515 4.37216 9.94C4.44068 9.91326 4.50471 9.87616 4.562 9.83C4.6076 9.80348 4.65104 9.77338 4.69189 9.74L7.6894 6.88C7.78452 6.78939 7.86089 6.68091 7.91413 6.56076C7.96737 6.44061 7.99645 6.31114 7.99969 6.17975C8.00625 5.91438 7.90721 5.65728 7.72437 5.465C7.54152 5.27272 7.28984 5.16101 7.0247 5.15444C6.75955 5.14788 6.50267 5.247 6.31054 5.43L5.00163 6.66L5.00163 1C5.00163 0.734783 4.89636 0.48043 4.70898 0.292893C4.5216 0.105357 4.26746 -1.63154e-07 4.00247 -1.74738e-07C3.73747 -1.86321e-07 3.48333 0.105357 3.29595 0.292893C3.10857 0.48043 3.0033 0.734783 3.0033 1L3.0033 6.59L1.71437 5.29C1.62149 5.19627 1.51098 5.12188 1.38922 5.07111C1.26746 5.02034 1.13686 4.9942 1.00496 4.9942C0.873059 4.9942 0.742462 5.02034 0.620704 5.07111C0.498946 5.12188 0.388438 5.19627 0.295552 5.29C0.201901 5.38296 0.127569 5.49356 0.0768425 5.61542C0.0261161 5.73728 2.20339e-07 5.86799 2.14569e-07 6C2.08798e-07 6.13201 0.0261161 6.26272 0.0768425 6.38458C0.127569 6.50644 0.201901 6.61704 0.295552 6.71L3.29306 9.71C3.38513 9.79995 3.4937 9.87126 3.61279 9.92C3.73601 9.97254 3.86853 9.99974 4.00247 10Z" fill="white"/>
                        </svg>
                    }
                    <p>{differences[1]}</p>
                </div>
            </div>
        </div>
        <div className='chart__wrapper--forColumn'>
            <div className='position__relative'>
                <div className='position__absolute'>
                    <p className='test__text test__text__client'>{serverData?.dev?.front}</p>
                     <svg width="80" height={devFrontPx+devBackPx + devDBPx} viewBox={`0 0 80 ${devFrontPx+devBackPx + devDBPx}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="80" height={devFrontPx+devBackPx + devDBPx} rx="10" fill="#4AB6E8"/>
                    </svg>
                </div>
                <div className='position__absolute'>
                    <p className='test__text test__text__server'>{serverData?.dev?.back}</p>
                    <svg width="80" height={devBackPx+ devDBPx} viewBox={`0 0 80 ${devBackPx+ devDBPx}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="80" height={devBackPx+ devDBPx} rx="10" fill="#AA6FAC" />
                    </svg>
                </div>
                <div className='position__absolute'>
                    <p  className='test__text test__text__db' >{serverData?.dev?.db}</p>
                    <svg width="80" height={devDBPx} viewBox={`0 0 80 ${devDBPx}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="80" height={devDBPx} rx="10"     fill="#E85498"/>
                    </svg>
                </div>
            </div>
            <div className='position__relative'>
                <div className='position__absolute'> 
                    <p  className='test__text test__text__client'>{serverData?.test?.front}</p>
                    <svg width="80" height={testFrontPx +testBackPx + testDBPx} viewBox={`0 0 80 ${testFrontPx + testBackPx + testDBPx}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="80" height={testFrontPx +testBackPx + testDBPx} rx="10" fill="#4AB6E8"/>
                    </svg>
                </div>
                <div className='position__absolute'>
                    <p  className='test__text test__text__server'>{serverData?.test?.back}</p>
                    <svg width="80" height={testBackPx + testDBPx} viewBox={`0 0 80 ${testBackPx + testDBPx}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="80" height={testBackPx + testDBPx} rx="10" fill="#AA6FAC"/>
                    </svg>
                </div>
                <div className='position__absolute'>
                    <p  className='test__text test__text__db'>{serverData?.test?.db}</p>
                    <svg width="80" height={testDBPx} viewBox={`0 0 80 ${testDBPx}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="80" height={testDBPx} rx="10"  fill="#E85498"/>
                    </svg>
                </div>
            </div>
            <div className='position__relative'>
                <div className='position__absolute'>
                    <p  className='test__text test__text__client'>{serverData?.prod?.front}</p>
                     <svg width="80" height={prodFrontPx +prodBackPx + prodDBPx} viewBox={`0 0 80 ${prodFrontPx +prodBackPx + prodDBPx}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="80" height={prodFrontPx +prodBackPx + prodDBPx} ry="10" fill="#4AB6E8"/>
                    </svg>
                </div>
                <div className='position__absolute'>
                    <p  className='test__text test__text__server'>{serverData?.prod?.back}</p>
                    <svg width="80" height={prodBackPx + prodDBPx} viewBox={`0 0 80 ${prodBackPx + prodDBPx}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="80" height={prodBackPx + prodDBPx} rx="10" fill="#AA6FAC"/>
                    </svg>
                </div>
                <div className='position__absolute'>
                    <p  className='test__text test__text__db'>{serverData?.prod?.db}</p>  
                    <svg width="80" height={prodDBPx} viewBox={`0 0 80 ${prodDBPx}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="80" height={prodDBPx} rx="10" fill="#E85498"/>
                    </svg>
                </div>
            </div>
            <div className='position__relative norm__chart' style={{height: normTestPx}}>
                    <p className='standartBox '>{serverData.norm}</p> 
            </div>
        </div>
        <div className='chart__column__title'>
            <p>dev</p>
            <p>test</p>
            <p>prod</p>
            <p>норма</p>
          </div>
        </>    
    );
};

export default ChartSVG;