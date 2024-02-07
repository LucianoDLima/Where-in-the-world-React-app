import ImgPlaceholderIcon from '../../../components/Icons/ImgPlaceholderIcon';
import { cn } from '../../../libs/utils';

/**
 * Render a skeleton loading animation
 */
function SkeletonCard() {
  return (
    <li className='flex w-full min-w-[16.5rem] max-w-72 flex-col overflow-hidden rounded-md bg-primary text-primary shadow-foggy md:max-w-64'>
      <div className='mb-10 h-40'>
        <div className='flex h-full w-full animate-pulse items-center justify-center'>
          <ImgPlaceholderIcon aria-hidden='true' className='h-10 w-10 fill-text-primary/60' />
        </div>
      </div>

      <div className='animate-pulse px-6'>
        <div className='mb-4 h-5 rounded-full bg-loading'></div>

        <div className='flex flex-col gap-2 text-sm'>
          {Array.from({ length: 3 }).map((_, index, array) => (
            <span
              key={index}
              className={cn(
                'h-4 w-[90%] rounded-full bg-loading',
                index === array.length - 1 ? ' mb-10' : ''
              )}
            />
          ))}
        </div>
      </div>
    </li>
  );
}

export default SkeletonCard;
