import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Photo {
  url: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent {
  photos: Photo[] = [
    { url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80', category: 'Спальня' },
    
    { url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80', category: 'Ванна кімната' },
    { url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80', category: 'Ванна кімната' },
    
    { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1000&q=80', category: 'Вид будівлі' },
    { url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80', category: 'Вид будівлі' },
    { url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80', category: 'Вид будівлі' }
  ];

  lightboxOpen: boolean = false;
  currentPhotoIndex: number = 0;

  get currentPhoto(): Photo { return this.photos[this.currentPhotoIndex]; }
  get categories(): string[] { return [...new Set(this.photos.map(p => p.category))]; }

  getPhotosByCategory(category: string): Photo[] {
    return this.photos.filter(p => p.category === category);
  }

  openLightbox(photo: Photo) {
    this.currentPhotoIndex = this.photos.indexOf(photo);
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden'; 
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = 'auto'; 
  }

  selectPhoto(photo: Photo) {
    this.currentPhotoIndex = this.photos.indexOf(photo);
  }

  nextPhoto(event: Event) {
    event.stopPropagation();
    if (this.currentPhotoIndex < this.photos.length - 1) {
      this.currentPhotoIndex++;
    } else {
      this.currentPhotoIndex = 0;
    }
  }

  prevPhoto(event: Event) {
    event.stopPropagation();
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    } else {
      this.currentPhotoIndex = this.photos.length - 1;
    }
  }
}