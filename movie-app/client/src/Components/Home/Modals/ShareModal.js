import React from 'react';
import { Input } from '../UsedInput';
import MainModal from './MainModal';
import { HiPlusCircle } from 'react-icons/hi';
import { FaFacebook, FaTelegram, FaTwitter } from 'react-icons/fa';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from 'react-share';
const ShareMovieModal = ({ modalOpen, setModalOpen, movie }) => {
  const shareData = [
    {
      icon: FaFacebook,
      shareButton: FacebookShareButton,
    },
    {
      icon: FaTwitter,
      shareButton: TwitterShareButton,
    },
    {
      icon: FaTelegram,
      shareButton: TelegramShareButton,
    },
  ];

  const url = `${window.location.protocol}//${window.location.host}/movie/${movie?._id}`;

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full  align-middle p-10 overflow-y-auto h-full text-white rounded-2xl ">
        <h2 className="text-2xl ">
          Share <span className="text-xl font-bold">{movie?.name}</span>
        </h2>
        <form className="flex-rows flex-wrap gap-6 mt-6">
          {shareData.map((data, index) => (
            <data.shareButton key={index} url={url} quote="Netflix">
              <div className="w-12 transitions hover:bg-subMain flex-colo text-lg h-12 bg-white rounded bg-opacity-30">
                <data.icon />
              </div>
            </data.shareButton>
          ))}
        </form>
      </div>
    </MainModal>
  );
};

export default ShareMovieModal;
