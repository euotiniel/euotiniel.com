import AnimatedForm from '@/components/crafts/animated-form'
import CardProduct from '@/components/crafts/card-product'
import Vault from '@/components/crafts/vault'
import AlbumDisk from '@/components/crafts/album-disk'
import IntercativeButton from '@/components/crafts/interactive-button'
import Gallery from '@/components/crafts/gallery'
import TrackingProgress from './tracking-progress'
import Newsletter from '@/components/crafts/newsletter'

export const Crafts = {
  'animated-form': AnimatedForm,
  'card-product': CardProduct,
  'album-disk': AlbumDisk,
  'vault': Vault,
  'button': IntercativeButton,
  'gallery': Gallery,
  'tracking-progress': TrackingProgress,
  'newsletter': Newsletter,
} as const