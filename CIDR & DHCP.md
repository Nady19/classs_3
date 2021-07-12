*N.b. I will be calling the l2 device "the home router instead of router or switch"*

# CIDR 

**Classless Inter-Domain Network**

*CIDR is a method of assigning internet protocol (IP) addresses.*

*CIDR is based on variable-length subnet masking*

*CIDR has a prefix and suffix*

`prefix: binary representation of the network address`

`suffix: declares the total no. of bits in the entire address`

`i.e.           192.168.0.0/16          `

This is an example of ***CIDR notation***

By **"/16"** it means the bits in the address that are occupied and can't be used by the host.

# Network & Host

Let's just jump into more details.

`192.168.0.0`

|decimal|   binary   | total bits |
|  192  |  11000000  |  8   |
|  168  |  10101000  |  8   |
|   0   |  00000000  |  8   |
|   0   |  00000000  |  8   |
|       |            |  32  |

So, if we assume using our home router , we can always see that whenever the router givess a device an IP it starts with `192.168` the later part changes but this remains fixed.

It is simply because IP addresses can be parsed into 2 kinds:(using the above example)

|Network identifier| `192.168`| The portion or bits of IP that is used by the network|
|Host identifier   | `.0.0`   |bits which can be dynamically allocated by our home router|

**BUT** IP doesn't allow host (in this example, my home router is the host) identifier to be all zeros and reserves all the ones identifier to serve as broadcast address.

***In the host identifier:***

|binary   |decimal|         |
|00000000 |   0   | not allowed|
|11111111 |  255  | reserved |

# DHCP

So, basically our router can give IP addresses to devices from `192.168.1.1` to `192.168.254.254` dynamically(work of DHCP). DHCP basically handles this zone and give IPs dynamically to a device whenever it connects. When the device conneccts to the host or our ome router it makes a request to the home router which is known as DHCP request.

*DHCP holds the CAM table.*

And when it is written with a slash(/) which is called CIDR notation it means for our router that the network identifier has already occupied the 16 bits and the left 16 bits can be used by it as a host and give IP.

# How/Calculation

`192.168.0.0/16` this was our example from the begining

|CIDR notation| Host Formula   | Available host|
|     /16     | [{2^(32-16)}-2]|      65,534   |

This is the number of IPs our home router can allocate whenever a device connects to it.

Let's take another example:

`192.168.129.13/17` this was our example from the begining

|CIDR notation| Host Formula   | Available host|
|     /17     | [{2^(32-17)}-2]|      32,766   |

At the same time if we look at the binary version of this :

`11000000.10101000.1``0000000.00000000`

Here, only the last 13 bits can be used by the home router. Which are the 32,766 available hosts.