import { Box, Typography, Button, Grid, Card, CardContent, Stack } from '@mui/material';
import { Zap, CpuIcon, UsersIcon, BookIcon, WrenchIcon, LineChartIcon, CardSim } from 'lucide-react';

const products = [
  {
    icon: <Zap size={32} />,
    title: 'Qomputing IDE',
    points: [
      'Interactive UI/UX with Drag and Drop feature',
      'Integrated AI for Circuit Designing',
      'Integrate with any Quantum Simulator or Hardware',
      'Our own Qomputing Simulators',
    ],
  },
  {
    icon: <CpuIcon size={32} />,
    title: 'Qomputing Simulator',
    points: [
      'Freely available 20+ qubit simulator',
      'Assembly Language Base',
      'AI based Qomputing Simulator',
      'Qomputing Simulators for specific use cases',
    ],
  },
  {
    icon: <UsersIcon size={32} />,
    title: 'Qommunity',
    points: [
      'Engage with Similar and Curious minds',
      'Get updates on Quantum Advancements and research',
      'Collaborative Research Projects',
      'Weekly Quantum Workshops & Webinars',
    ],
  },
  {
    icon: <BookIcon size={32} />,
    title: 'Qourses',
    points: [
      'Practice on Qomputing IDE',
      'Hands-on Projects',
      'Expert Instructors',
      'Certification',
    ],
  },
  {
    icon: <WrenchIcon size={32} />,
    title: 'Tool Library',
    points: [
      'Algorithm Collection',
      'Research Tools',
      'Dynamically Typed Codes',
      'Regular Updates',
    ],
  },
  {
    icon: <LineChartIcon size={32} />,
    title: 'Prediction Modeling',
    points: [
      'Monte Carlo Methods',
      'Risk Quantification',
      'Probabilistic Models',
      'Predictive Analytics',
    ],
  },
];

export default function QuantumProductCards() {
  return (
    <Box sx={{ py: 10, px: 4 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
        Complete Quantum <span style={{ color: '#ffe082' }}>Ecosystem</span>
      </Typography>
      <Typography variant="body1" textAlign="center" mb={6}>
        From development to deployment, our integrated suite of tools empowers you to harness the full potential of quantum computing.
      </Typography>

      <Grid component="div" display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4}>
        {products.map((product, index) => (
          <Grid component="div" gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }} key={index}>
            <Card
              sx={{
                backgroundColor: '#0a0f1a',
                color: 'white',
                borderRadius: 3,
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                },
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                  {product.icon}
                  <Typography variant="h6" fontWeight="bold">
                    {product.title}
                  </Typography>
                </Stack>
                <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                  {product.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>{point}</li>
                  ))}
                </ul>
                <Button
                  size="small"
                  sx={{
                    mt: 2,
                    color: '#ffe082',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    '&:hover': {
                      color: '#ffca28',
                    },
                  }}
                >
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


