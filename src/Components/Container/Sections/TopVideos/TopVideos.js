import React, { Component } from 'react';
import './TopVideos.css'
import { FaRandom } from 'react-icons/fa'
import TopVideosData from '../../../../Data/TopVideosData/TopVideosData';
import { MT, MS, SC, ND, IMG } from '../compo/ComponentIndex'
import topvideos01 from '../../../../assets/images/video/video-preview.jpg'
class TopVideos extends Component {
    render() {
        return (
            <MS class='topvideos' Uniq='TopVideos'>
                <MT>TopVideos</MT>
                <SC CCS='topvideos__container container flex'>
                    <ND class='left'>
                        <ND class='topvideos__list flex'>
                            <ND class='topvideos__title flex'>
                                <h3>Top Videos</h3>
                                <FaRandom />
                            </ND>
                            <ND class='topvideos__info felx'>
                                {TopVideosData}
                            </ND>
                        </ND>
                    </ND>
                    <ND class='right topvideos__imgs flex'>

                        <IMG i={topvideos01} a='topvideo' c='topvideos__img' />
                        <div> <span>Everything About The Virtual Hosts </span></div>

                    </ND>
                </SC>
            </MS>

        );
    }
}

export default TopVideos;