import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TeacherCard = ({ teacher, viewMode = 'grid' }) => {
  const [isFavorited, setIsFavorited] = useState(teacher?.isFavorited || false);

  const handleFavoriteToggle = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  const handleBookingClick = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    console.log('Book lesson with', teacher?.name);
  };

  const renderRating = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        <div className="flex items-center">
          {[...Array(5)]?.map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={14}
              className={i < Math.floor(rating) ? 'text-secondary fill-current' : 'text-gray-300'}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-foreground">{rating}</span>
        <span className="text-sm text-text-secondary">({teacher?.reviewCount})</span>
      </div>
    );
  };

  const renderLanguages = (languages) => {
    const displayLanguages = languages?.slice(0, 3);
    const remainingCount = languages?.length - 3;

    return (
      <div className="flex flex-wrap gap-1">
        {displayLanguages?.map((lang, index) => (
          <span
            key={index}
            className="inline-block bg-accent/10 text-accent px-2 py-1 rounded-educational text-xs font-medium"
          >
            {lang}
          </span>
        ))}
        {remainingCount > 0 && (
          <span className="inline-block bg-muted text-text-secondary px-2 py-1 rounded-educational text-xs">
            +{remainingCount} more
          </span>
        )}
      </div>
    );
  };

  if (viewMode === 'list') {
    return (
      <Link
        to={`/teacher-profile-detail?id=${teacher?.id}`}
        className="block bg-card border border-border rounded-educational hover:shadow-educational-lg transition-educational group"
      >
        <div className="p-6">
          <div className="flex items-start space-x-4">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <Image
                  src={teacher?.profileImage}
                  alt={teacher?.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                {teacher?.isOnline && (
                  <div className="absolute bottom-1 right-1 w-4 h-4 bg-accent border-2 border-white rounded-full"></div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-educational">
                      {teacher?.name}
                    </h3>
                    {teacher?.isVerified && (
                      <Icon name="BadgeCheck" size={18} className="text-accent" />
                    )}
                  </div>

                  <p className="text-text-secondary text-sm mb-2">{teacher?.title}</p>
                  
                  <div className="flex items-center space-x-4 mb-3">
                    {renderRating(teacher?.rating)}
                    <div className="flex items-center space-x-1 text-sm text-text-secondary">
                      <Icon name="Users" size={14} />
                      <span>{teacher?.studentCount} students</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-text-secondary">
                      <Icon name="Clock" size={14} />
                      <span>{teacher?.experience} years</span>
                    </div>
                  </div>

                  {renderLanguages(teacher?.languages)}
                </div>

                {/* Price and Actions */}
                <div className="flex flex-col items-end space-y-3 ml-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">${teacher?.hourlyRate}</div>
                    <div className="text-sm text-text-secondary">per hour</div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleFavoriteToggle}
                      className="p-2 rounded-educational text-text-secondary hover:text-secondary hover:bg-secondary/10 transition-educational"
                      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
                    >
                      <Icon 
                        name="Heart" 
                        size={18} 
                        className={isFavorited ? 'fill-current text-secondary' : ''} 
                      />
                    </button>

                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleBookingClick}
                    >
                      Book Lesson
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/teacher-profile-detail?id=${teacher?.id}`}
      className="block bg-card border border-border rounded-educational hover:shadow-educational-lg transition-educational group hover-lift"
    >
      <div className="relative">
        {/* Profile Image */}
        <div className="relative p-6 pb-4">
          <div className="relative mx-auto w-24 h-24">
            <Image
              src={teacher?.profileImage}
              alt={teacher?.name}
              className="w-full h-full rounded-full object-cover"
            />
            {teacher?.isOnline && (
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-accent border-2 border-white rounded-full"></div>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteToggle}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-text-secondary hover:text-secondary hover:bg-white transition-educational"
            aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Icon 
              name="Heart" 
              size={16} 
              className={isFavorited ? 'fill-current text-secondary' : ''} 
            />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <h3 className="text-lg font-heading font-semibold text-foreground group-hover:text-primary transition-educational">
                {teacher?.name}
              </h3>
              {teacher?.isVerified && (
                <Icon name="BadgeCheck" size={16} className="text-accent" />
              )}
            </div>
            <p className="text-text-secondary text-sm">{teacher?.title}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center mb-3">
            {renderRating(teacher?.rating)}
          </div>

          {/* Languages */}
          <div className="mb-4">
            {renderLanguages(teacher?.languages)}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary mb-4">
            <div className="flex items-center space-x-1">
              <Icon name="Users" size={14} />
              <span>{teacher?.studentCount}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>{teacher?.experience}y</span>
            </div>
          </div>

          {/* Price */}
          <div className="text-center mb-4">
            <div className="text-xl font-bold text-foreground">${teacher?.hourlyRate}</div>
            <div className="text-sm text-text-secondary">per hour</div>
          </div>

          {/* Action Button */}
          <Button
            variant="default"
            fullWidth
            onClick={handleBookingClick}
          >
            Book Lesson
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default TeacherCard;