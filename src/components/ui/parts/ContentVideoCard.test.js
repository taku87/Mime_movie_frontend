import ContentVideoCard from 'src/components/ui/parts/CompletedVideosList';
import { render, screen } from '@testing-library/react';

const draft_content_video = {
  id: 0,
  number: '100',
  title: 'title',
  description: 'description',
  thumbnail: 'thumbnail',
  youtube_url: 'youtube_url',
  state: 'draft'
};

test('stateの状態で場合分けされる', () => {
  render(<ContentVideoCard draft_content_video />);
  const result = screen.find('.door-waiting')
  expect(result).toHaveLength(1);

})