'use client';

// NEXT
import Link from 'next/link';

// MATERIAL - UI
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Links from '@mui/material/Link';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// THIRD - PARTY
import { motion } from 'framer-motion';

// PROJECT IMPORTS
import FadeInWhenVisible from './Animation';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';

// ASSETS
import { DocumentDownload, ExportSquare } from 'iconsax-react';
const techBootstrap = '/assets/images/landing/fa_regular_clock.png';
const techMui = '/assets/images/landing/fa_solid_award.png';
const techCodeigniter = '/assets/images/landing/fa_regular_check-circle.png';
const techNet = '/assets/images/landing/fa_solid_globe.png';
const techFigma = '/assets/images/landing/fa_regular_handshake.png';
const techAngular = '/assets/images/landing/fa_regular_file.png';
const techVue = '/assets/images/landing/Book_font_awesome.png';
const techNextJS = '/assets/images/landing/fa_solid_user-graduate.png';

let value: string = '';
if (typeof window !== 'undefined') {
  value = window.location.search;
}
const params = new URLSearchParams(value);
const ispValue = params.get('isp');

const Technologies = [
  {
    trending: false,
    icon: techBootstrap,
    title: 'Pro Bono (Free) Legal Support',
    description: "If you are struggling financially and cannot afford a lawyer, you can apply for a 20-minute free advice session with a lawyer through Law On Earth. To help determine your eligibility we will need to submit a request form which can help us determine what type of lawyer will be able to provide the best support for your situation.",
    preview: ispValue !== null && parseInt(ispValue) === 1 ? '#' : '#',// # is link
    free: '#',
    style: { textAlign: 'center' }
  },
  {
    trending: true,
    icon: techMui,
    title: 'Online Company Registration',
    description:
      'Register your company online, in Australia, in just minutes for as little as $562 AUD. This covers all government fees and includes 16 critical business documents and a company constitution! Start your company with confidence & legal security. You can set your company up for success with Law On Earth.',
    preview: ispValue !== null && parseInt(ispValue) === 1 ? '#' : '#',
    free: '#',
    style: { textAlign: 'center' }
  },
  {
    trending: false,
    icon: techAngular,
    title: 'Create Legal Documents',
    description: "Change the way you use legal documents with Law On Earth. We are more than just a 'template' company. Our documents aren't filled with legal jargon and are companies with 'Human Guides'. These guides are written at a grade-7 reading standard, and explain each clause of the legal documents.",
    preview:
      ispValue !== null && parseInt(ispValue) === 1
        ? '#'
        : '#',
    free: '#',
    style: { textAlign: 'center' }
  },
  {
    trending: false,
    icon: techNextJS,
    title: 'Legal Advisors',
    description:
      'Speak to a Lawyer. Booking sessions with fixed-fee Advisors.',
    preview:
      ispValue !== null && parseInt(ispValue) === 1
        ? '#'
        : '#', //link
    free: null,
    style: { textAlign: 'center' }
  },
  {
    trending: false,
    icon: techVue,
    title: 'Legal Guides and Courses',
    description: "Browse the Learning Centre to access hundreds of articles & guides.",
    preview: ispValue !== null && parseInt(ispValue) === 1 ? '#' : '#',
    free: null,
    style: { textAlign: 'center' }
  },
  {
    trending: false,
    icon: techNet,
    title: 'Available Anytime Anywhere',
    description:
      'Access Law on Earth\'s services online 24/7. You can complete your documents and business registration in as little as 5 minutes and then instantly download your document.',
    preview:
      ispValue !== null && parseInt(ispValue) === 1 ? '#' : '#',
    free: '#',
    style: { textAlign: 'center' }
  },
  {
    trending: false,
    icon: techCodeigniter,
    title: 'Quality Your Can Trust',
    description:
      'Each advisor has at least 3-years\' experience in their field, so you can have peace of mind knowing that you can access the expert support that you need.',
    preview:
      ispValue !== null && parseInt(ispValue) === 1
        ? '#'
        : '# ',
    free: '#',
    style: { textAlign: 'center' }
  },
  {
    trending: false,
    icon: techFigma,
    title: 'Transparent Pricing',
    description:
      'You can save thousands on legal fees with our fixed-price system, you\'ll know exactly what you\'ll pay for from the start so you can make the best decision for your needs.',
    preview: '#',
    free: null
  }
];

// Split Technologies array into two parts
const firstTechnologies = Technologies.slice(0, 5);
const lastTechnologies = Technologies.slice(5);

// ==============================|| LANDING - TechnologiesPage ||============================== //

const TechnologiesPage = () => {
  return (
    <Container>
      <Grid container spacing={3} alignItems="center" justifyContent="center" sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 10, xs: 2.5 } }}>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ textAlign: 'center', marginBottom: 3 }}>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.2
                }}
              >
                <Typography variant="h2">Our Services</Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <motion.div
                initial={{ opacity: 0, translateY: 550 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 30,
                  delay: 0.4
                }}
              >
                <Typography>Explore our easy to use services.</Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="center">
            {firstTechnologies.map((tech, index) => (
              <Grid item xs={12} md={6} lg={4} key={index} >
                <FadeInWhenVisible>
                  <MainCard>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        {tech.trending && (
                          <Badge badgeContent="TRENDING" color="error" variant="light">
                            <CardMedia component="img" image={tech.icon} sx={{ width: 'auto' }} />
                          </Badge>
                        )}
                        {!tech.trending && <CardMedia component="img" image={tech.icon} sx={{ width: 'auto' }} />}
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h4">{tech.title}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>{tech.description}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={2} justifyContent="flex-start">
                          <Grid item>
                            <Button
                              variant="contained"
                              color="secondary"
                              size="large"
                              startIcon={<ExportSquare />}
                              component={Link}
                              href={tech.preview}
                              target="_blank"
                              sx={{
                                fontWeight: 500,
                                bgcolor: 'secondary.light',
                                color: 'secondary.darker',
                                '&:hover': { color: 'secondary.lighter' }
                              }}
                            >
                              Details
                            </Button>
                          </Grid>
                          {!(tech.free == null) && (
                            <Grid item>
                              <Links component={Link} href={tech.preview}>
                                <IconButton
                                  size="large"
                                  shape="rounded"
                                  color="secondary"
                                  sx={{
                                    bgcolor: 'secondary.lighter',
                                    color: 'secondary.darker',
                                    '&:hover': { color: 'secondary.lighter', bgcolor: 'secondary.darker' }
                                  }}
                                >
                                  <DocumentDownload />
                                </IconButton>
                              </Links>
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </MainCard>
                </FadeInWhenVisible>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="h3">Why Choose Law On Earth?</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="center">
            {lastTechnologies.map((tech, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <FadeInWhenVisible>
                  <MainCard>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        {tech.trending && (
                          <Badge badgeContent="TRENDING" color="error" variant="light">
                            <CardMedia component="img" image={tech.icon} sx={{ width: 'auto' }} />
                          </Badge>
                        )}
                        {!tech.trending && <CardMedia component="img" image={tech.icon} sx={{ width: 'auto' }} />}
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h4">{tech.title}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography>{tech.description}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container spacing={2} justifyContent="flex-start">
                          <Grid item>
                            <Button
                              variant="contained"
                              color="secondary"
                              size="large"
                              startIcon={<ExportSquare />}
                              component={Link}
                              href={tech.preview}
                              target="_blank"
                              sx={{
                                fontWeight: 500,
                                bgcolor: 'secondary.light',
                                color: 'secondary.darker',
                                '&:hover': { color: 'secondary.lighter' }
                              }}
                            >
                              Details
                            </Button>
                          </Grid>
                          {!(tech.free == null) && (
                            <Grid item>
                              <Links component={Link} href={tech.preview}>
                                <IconButton
                                  size="large"
                                  shape="rounded"
                                  color="secondary"
                                  sx={{
                                    bgcolor: 'secondary.lighter',
                                    color: 'secondary.darker',
                                    '&:hover': { color: 'secondary.lighter', bgcolor: 'secondary.darker' }
                                  }}
                                >
                                  <DocumentDownload />
                                </IconButton>
                              </Links>
                            </Grid>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </MainCard>
                </FadeInWhenVisible>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TechnologiesPage;
