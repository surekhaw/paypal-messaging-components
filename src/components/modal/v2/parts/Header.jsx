/** @jsx h */
import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import { isLander, useServerData, useTransitionState, useScroll, currencyFormat } from '../lib';
import Icon from './Icon';

const Header = ({
    headline,
    subheadline,
    logo,
    isQualifying = 'false',
    qualifyingSubheadline,
    closeButtonLabel = 'Close',
    viewName,
    useV4Design,
    isQLDesign,
    preapprovalHeadline,
    preapprovalSubHeadline,
    isPreapproved = 'false'
}) => {
    const { country } = useServerData();
    const [, handleClose] = useTransitionState();
    const [isScrolled, setScrolled] = useState(false);

    useScroll(
        ({ target: { scrollTop } }) => {
            if (!isScrolled && scrollTop > 0) {
                setScrolled(true);
            } else if (isScrolled && scrollTop <= 0) {
                setScrolled(false);
            }
        },
        [isScrolled]
    );

    // Used to specifically target styles to a specific country
    const countryClassName = country?.toLowerCase();

    // condition header content on design
    const displayHeadline =
        // eslint-disable-next-line no-nested-ternary
        isQLDesign && headline !== 'Pay Monthly'
            ? headline.slice(0, 8)
            : isPreapproved
            ? preapprovalHeadline
            : headline;
    const index = qualifyingSubheadline.length - 48;
    const qlQualifyingSubheadlineTail = qualifyingSubheadline.slice(index);
    let qlQualifyingSubheadline = qualifyingSubheadline.replace(/your purchase of /g, '').slice(0, index - 18);
    qlQualifyingSubheadline = `${qlQualifyingSubheadline} interest-free payments ${qlQualifyingSubheadlineTail}`;

    // eslint-disable-next-line no-nested-ternary
    const displayQualifyingSubHeadline = isQLDesign
        ? qlQualifyingSubheadline
        : isPreapproved
        ? preapprovalSubHeadline
        : qualifyingSubheadline.replace(/(\s?EUR)/g, ' €');

    // IMPORTANT: These elements cannot be nested inside of other elements.
    // They are using very precise CSS position sticky rules that require this
    // specific adjacent DOM structure
    return (
        <Fragment>
            <div aria-hidden="true" className="header__fixed-wrapper header__fixed-wrapper--front">
                <div
                    className={`header__background-wrapper header__background-wrapper--gradient ${
                        useV4Design ? 'v4Design' : ''
                    } ${isQLDesign ? 'qLDesign' : ''}`}
                />
            </div>
            <div aria-hidden="true" className="header__fixed-wrapper">
                <div
                    className={`header__background-wrapper ${useV4Design ? 'v4Design' : ''}  ${
                        isQLDesign ? 'qLDesign' : ''
                    }`}
                />
            </div>
            <div className={`header__icons ${isQLDesign ? 'qLDesign' : ''}`}>
                <div className={`logo__wrapper ${isScrolled ? 'logo__wrapper--scroll' : ''}`}>
                    <div className="pp-logo">
                        {/* eslint-disable-next-line no-nested-ternary */}
                        {isQLDesign && headline !== 'Pay Monthly' ? (
                            <Icon name="qLDesign__pi4_logo" />
                        ) : isQLDesign ? (
                            <Icon name="qLDesign__pmo_logo" />
                        ) : (
                            <Icon name={logo} />
                        )}
                    </div>
                </div>
                {!isLander && (
                    // We don't need to render an 'x' button if the target is a lander since you will close via a
                    // merchant-provided close button from their own iframe, or by closing the window in the case of a webpage.
                    <button
                        className={`close ${isQLDesign ? 'qLDesign' : ''}`}
                        aria-label={closeButtonLabel}
                        type="button"
                        id="close-btn"
                        aria-keyshortcuts="escape"
                        onClick={() => handleClose('Close Button')}
                    >
                        {isQLDesign ? <Icon name="qLDesign__close" /> : <Icon name="close" />}
                    </button>
                )}
                <div className="header__fixed-wrapper header__fixed-wrapper--front">
                    <div
                        className={`header__background-wrapper header__background-wrapper--sticky ${
                            useV4Design ? 'v4Design' : ''
                        } ${isQLDesign ? 'qLDesign' : ''}`}
                    />
                </div>
            </div>
            <div className="header__content">
                <Icon name={`${viewName}-desktop`} isQLDesign={isQLDesign} />
                <Icon name={`${viewName}-mobile`} isQLDesign={isQLDesign} />
                {/* <Icon name="background-pp-mobile" /> */}
                <div className={`${isQLDesign ? 'qLDesign' : ''}`}>
                    <h2
                        // id used for aria-labelleby on modal container element
                        id="header__headline"
                        className={
                            isPreapproved === 'true'
                                ? `headline-${countryClassName}-preapproved`
                                : `headline-${countryClassName}`
                        }
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: displayHeadline }}
                    />
                    {isQLDesign === true && isPreapproved === true ? (
                        <span className="qLDesign">Pre-approved</span>
                    ) : (
                        ''
                    )}
                </div>
                {isQualifying === 'true' && qualifyingSubheadline !== '' ? (
                    <p
                        className={`subheadline_p subheadline-${countryClassName} qualifying  ${
                            isQLDesign ? 'qLDesign_subheadline' : ''
                        }`}
                    >
                        {/* {isPreapproved === 'true'
                            ? preapprovalSubHeadline
                            : qualifyingSubheadline.replace(/(\s?EUR)/g, ' €')} */}
                        {displayQualifyingSubHeadline}
                    </p>
                ) : (
                    <p
                        className={`subheadline_p subheadline-${countryClassName}`}
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html:
                                currencyFormat(isPreapproved === 'true' ? preapprovalSubHeadline : subheadline) ?? ''
                        }}
                    />
                )}
            </div>
        </Fragment>
    );
};

export default Header;
