import numpy as np
import matplotlib.pyplot as plt
import random
from ncplot import ncplot
import netCDF4

def show_format_images():
    images = np.load('images.npy')
    labels = np.load('labels.npy')

    for x in range(10):
        i = random.randint(0, images.shape[0])
        print(images[i].shape)
        image = np.reshape(images[i], (images[i].shape[0], images[i].shape[1]))
        print(image.shape)
        plt.imshow(image, cmap="binary")
        plt.title('Image #' + str(i) + '   ' + str(labels[i]) + ' knots')
        plt.show()

def show_cdf_images():
    #ncplot("Satellite Imagery/2012135N10255.ALETTA.2012.05.13.1800.36.GOE-13.022.hursat-b1.v06.nc")

    url = 'Satellite Imagery/2012135N10255.ALETTA.2012.05.13.1800.36.GOE-13.022.hursat-b1.v06.nc'
    nc = netCDF4.Dataset(url)

    # examine the variables
    print(nc.variables.keys())
    print(nc.variables['IRWIN'][0])
    print(nc.variables['IRWIN'][0].shape)

    topo = nc.variables['IRWIN'][0]

    # make image
    plt.imshow(topo, cmap="binary")
    plt.title(nc.title)
    plt.show()

show_cdf_images()
